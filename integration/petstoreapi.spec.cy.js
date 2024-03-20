import config from "./config.json";
import { faker } from "@faker-js/faker";

describe("API Testing", () => {
  let petId;

  it("Should add a new pet successfully", () => {
    //Create a new pet
    cy.request({
      method: "POST",
      url: `${config.addPetURL}`,
      body: {
        id: 12345,
        category: {
          id: 1,
          name: "Labrador",
        },
        name: `${faker.person.firstName}`,
        photoUrls: ["https://example.com/max.jpg"],
        tags: [
          {
            id: 1,
            name: "friendly",
          },
          {
            id: 2,
            name: "active",
          },
        ],
        status: "available",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);

      // Store the generated petId
      petId = response.body.id;
    });
  });

  it("Should retrieve pet information successfully", () => {
    // Check if petId is defined
    if (!petId) {
      throw new Error(
        "petId is not defined. Make sure the first test runs successfully."
      );
    }

    // Use the stored petId to retrieve pet information
    cy.request("GET", `${config.addPetURL}/${petId}`).then((getResponse) => {
      expect(getResponse.status).to.eq(200);
      expect(getResponse.body.id).to.eq(petId);
      expect(getResponse.body.category.id).to.be.a("number");
      expect(getResponse.body.category.name).to.be.a("string");
      expect(getResponse.body.name).to.be.a("string");
      expect(getResponse.body.photoUrls).to.be.an("array").that.is.not.empty;
      expect(getResponse.body.tags).to.be.an("array").that.is.not.empty;
      expect(getResponse.body.status)
        .to.be.a("string")
        .and.oneOf(["available", "pending", "sold"]);
    });
  });

  it("Should update pet information successfully", () => {
    // Check if petId is defined
    if (!petId) {
      throw new Error(
        "petId is not defined. Make sure the first test runs successfully."
      );
    }

    // Update pet name and status
    cy.request({
      method: "PUT",
      url: `${config.addPetURL}`,
      body: {
        id: petId,
        name: "Max Updated",
        status: "sold",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(petId);
      expect(response.body.name).to.eq("Max Updated");
      expect(response.body.status).to.eq("sold");
    });
  });

  it("Should retrieve updated pet information and assert status to be sold", () => {
    // Check if petId is defined
    if (!petId) {
      throw new Error(
        "petId is not defined. Make sure the first test runs successfully."
      );
    }

    // Retrieve updated pet information
    cy.request("GET", `${config.addPetURL}/${petId}`).then((getResponse) => {
      expect(getResponse.status).to.eq(200);
      expect(getResponse.body.id).to.eq(petId);
      expect(getResponse.body.status).to.eq("sold");
    });
  });
});
