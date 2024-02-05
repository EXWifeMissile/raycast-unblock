import process from 'node:process'
import consola from 'consola'
import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { TranslateWithShortcut } from '../../features/translations/shortcuts'
import { TranslateWithAI } from '../../features/translations/ai'

export function TranslationsRoute(fastify: FastifyInstance, opts: Record<any, any>, done: Function) {
  fastify.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    consola.info('[GET] /translations --> Local Handler')
    let res
    switch (process.env.TRANSLATE_TYPE) {
      case 'shortcut':
        res = await TranslateWithShortcut(request)
        break
      case 'ai':
        res = await TranslateWithAI(request)
        break
      default:
        res = await TranslateWithAI(request)
        break
    }
    consola.info('[GET] /translations <-- Local Handler')
    return reply.send(res)
  })
  done()
}