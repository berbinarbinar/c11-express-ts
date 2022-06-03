import { getConnectionOptions, createConnection, getConnection } from 'typeorm'

export const createTypeORMConn = async (params?: object) => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV)
  if (params) {
    Object.assign(connectionOptions, params)
  }
  return createConnection(connectionOptions)
}

export const getTypeORMConn = () => {
  return getConnection(process.env.NODE_ENV)
}
