/** @format */

import { Lambda, RDS, S3 } from 'aws-sdk'
import { RdsInstanceConfig } from 'common/models/secureRequests'

// export type RdsInstanceConfig = {
//     [key: string]: {
//       instanceClass: string
//       writer: boolean
//     }
//   }

export async function getRdsInstances(env) {
  const rds = new RDS()
  const instanceParams = {
    Filters: [{ Name: 'db-cluster-id', Values: [env] }]
  }
  const clusterParams = {
    DBClusterIdentifier: env
  }
  const [instances, cluster] = await Promise.all([
    rds.describeDBInstances(instanceParams).promise(),
    rds.describeDBClusters(clusterParams).promise()
  ])
//   const result: { [key: string]: { [prop: string]: any } } = {}
const result = {}

  const DBInstances = instances['DBInstances']
  const clusterMembers = cluster['DBClusters']?.[0]?.['DBClusterMembers']
  DBInstances?.forEach(db => {
    if (!db['DBInstanceIdentifier']) return
    result[db['DBInstanceIdentifier']] = {
      instanceClass: db['DBInstanceClass']
    }
  })
  clusterMembers?.forEach(db => {
    if (!db['DBInstanceIdentifier']) return
    result[db['DBInstanceIdentifier']]['writer'] = db['IsClusterWriter']
  })

  return result
}

export async function callLambdaAsync(functionArn, payload){
  const lambda = new Lambda()
  const params = {
    FunctionName: functionArn,
    InvokeArgs: JSON.stringify(payload)
  }

  return lambda.invokeAsync(params).promise()
}

// Return type Promise<S3.ObjectList>
export const getS3ListingByPrefix = async (s3client /* Type AWS.S3 */, bucket, prefix) => {
  const args = {
    Prefix: prefix,
    Bucket: bucket
  }

  let token
  const objectList = []

  do {
    const list = { ContinuationToken: token, ...args }
    console.log(list)
    const res = await s3client.listObjectsV2(list).promise()

    token = res.NextContinuationToken
    const contents = res.Contents 
    if (contents) objectList.push(contents)
  } while (token !== undefined)
  // flatten pages, remove base directory, sort by most recent
  const normalised = objectList
    .flat()
    .filter((o)=> o.Key !== prefix)
    .sort((a,b) => new Date(b.LastModified).getTime() - new Date(a.LastModified).getTime()
  );
  return normalised
}
