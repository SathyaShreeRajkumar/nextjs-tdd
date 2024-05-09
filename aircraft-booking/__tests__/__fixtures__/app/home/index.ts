import { UserDetail } from '@/types/user-type'
import { faker } from '@faker-js/faker'

export const mockUserDetails: UserDetail = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.number.int(),
    address: faker.lorem.words(4),
    city: faker.location.city(),
    postalCode: faker.location.zipCode()
}

export const invalidUserDetailsMock = {
    invalidFirstName: String(faker.number.int()),
    invalidLastName: String(faker.number.int()),
    invalidEmail: faker.lorem.words(),
    invalidPhone: String(faker.number.int())
}
