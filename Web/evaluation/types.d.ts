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
