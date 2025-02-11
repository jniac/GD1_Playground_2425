export type Student = {
  name: string
  prefix: string
  github: string
}

export type Promotion = {
  info: {
    school: string
    year: string
    promotion: string
  }
  students: Student[]
}

export type EvaluationInfo = {
  title: string
  date: string
  comment: string
  coefficient: number
}

export type SimpleEvaluation = {
  prefix: string
  name: string
  grade: number
  comment: string
}
