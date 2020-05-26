import { LogErrorRepository } from '@/data/protocols/db/log/log-error-repository'

export const mockLogErrorRepository = (): LogErrorRepository => {
  class LogErrorReporitoryStub implements LogErrorRepository {
    async logError (stack: string): Promise<void> {
      return await Promise.resolve()
    }
  }
  return new LogErrorReporitoryStub()
}
