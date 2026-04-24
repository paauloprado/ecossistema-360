import { Faker, faker } from "@faker-js/faker"

const usePseudonymus = (name: string, buildFakerName: (faker: Faker) => string) => {
  let pseudonymu = localStorage.getItem(name)
  if (!pseudonymu) {
    const faker_name = buildFakerName(faker)
    localStorage.setItem(name, faker_name)
    pseudonymu = faker_name
  }
  return pseudonymu
}

const useUnitName = (key: any) => usePseudonymus(`unit_${key}`, f => f.company.name())
const useCentralName = (key: any) => usePseudonymus(`central_${key}`, f => f.company.name())
const usePersonName = (key: any) => usePseudonymus(`person_${key}`, f => f.person.fullName())

export {
  useUnitName,
  usePersonName,
  useCentralName,
}
