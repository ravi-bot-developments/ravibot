export const PREFIX = process.env.PREFIX?.length ? process.env.PREFIX : null
export const STATUS = process.env.STATUS?.length ? process.env.STATUS : null
export const TOKEN = process.env.TOKEN?.length ? process.env.TOKEN : null
export const PRESENCE_STATUS = (process.env.PRESENCE_STATUS?.length && ['dnd', 'idle', 'invisible', 'online'].includes(process.env.PRESENCE_STATUS) ? process.env.PRESENCE_STATUS : 'online') as 'dnd' | 'idle' | 'invisible' | 'online'
export const TOKEN = process.env.GUID_ID?.length ? process.env.GUILD_ID : null
export const TOKEN = process.env.OWNERS?.length ? process.env.OWNERS : null
