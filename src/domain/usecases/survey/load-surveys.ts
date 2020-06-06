import { SurveyModel } from '@/domain/models/survey/survey'

export interface LoadSurveys {
  load: (accountId: string) => Promise<SurveyModel[]>
}
