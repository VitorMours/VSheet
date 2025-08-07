import { beforeAll, describe, it, test } from 'vitest';
import { Sequelize } from "sequelize";
import userSchema from "../../models/schemas/userSchema.js";
import { expect } from "vitest";


let sequelize;

beforeAll(async () => {

    sequelize = new Sequelize("sqlite::memory:",{logging: false});
    sequelize.define("User", userSchema);
    await sequelize.sync();

});

describe("User Schema Tests", () => {
    it("Creating user with valid data", async () => {
        const User = sequelize.models.User;
        const user = await new User({
            name: "John",
            surname: "Doe",
            email: "john.doe@example.com",
            password: "strongPassword3232!"
        });
        
        expect(user).toBeDefined();
        expect(user.name).toBe("John");
        expect(user.surname).toBe("Doe");
        expect(user.email).toBe("john.doe@example.com");
        expect(user.password).toBe("strongPassword3232!");

    });

    it("Throw error when creating with invalid email", async () => {
        const User = sequelize.models.User;
        try {
            await new User({
                name: "John",
                surname: "Doe",
                email: "invalid-email",
                password: "strongPassword3232!"
            });
        } catch (error) {
            expect(error).toBeDefined();
        }
    });

    it("User saved in the database", async () => {
        const User = sequelize.models.User;
        const user = await new User({
            name: "Jane",
            surname: "Doe",
            email: "jane.doe@example.com",
            password: "anotherStrongPassword123!"
        });
        await user.save();
    });

    it("Showing single user in the database when selected", async () => {
        const User = sequelize.models.User;
        const user = await new User({
            name: "Jane",
            surname: "Doe",
            email: "juke.doe@example.com",
            password: "anotherStrongPassword123!"
        });
        await user.save();
        const getUser = await User.findOne({where: {email: "juke.doe@example.com"}})
        expect(getUser).toBeDefined();
    });

    it("Getting all database users", async() => {
        const User = sequelize.models.User;
        const users = await User.findAll();
        expect(users).toBeDefined();
        expect(users.length).toBeGreaterThan(0);
    });


    test.todo("Remove user that exists from database", async () => {});
    test.todo("Throw error when trying to remove user that does not exist", async () => {});
    test.todo("Update user information", async () => {});
    test.todo("Throw error when trying to update user with invalid data", async () => {});
    test.todo("Throw error when trying to update user that does not exist", async () => {});
    test.todo("Throw error when trying to create user with existing email", async () => {});
});
