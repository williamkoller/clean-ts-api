import { SurveyModel } from '@/domain/models/survey/survey'

export interface LoadSurveysRepository {
  loadAll: (accountId: string) => Promise<SurveyModel[]>
}
