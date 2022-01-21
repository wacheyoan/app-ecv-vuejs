<template>
  <v-stepper
      v-model="e6"
      vertical
  >
    <v-stepper-step
        :complete="e6 > 1 && /.+@.+/.test(email)"
        step="1"
    >
      Email
    </v-stepper-step>
    <v-stepper-content step="1">
      <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Votre email"
          @input="verifyEmail"
          required
      ></v-text-field>
      <v-btn
          color="primary"
          @click="e6 = 2"
          :disabled="!this.validemail"
      >
        Continue
      </v-btn>
      <v-btn text
             disabled
      >
        Retour
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
        :complete="e6 > 2 && !!firstname"
        step="2"
    >
      Prénom
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-text-field
          v-model="firstname"
          :rules="nameRules"
          @input="verifyFirstName"
          label="Votre prénom"
          required
      ></v-text-field>
      <v-btn
          color="primary"
          @click="e6 = 3"
          :disabled="!this.validfirstname"
      >
        Continue
      </v-btn>
      <v-btn text
             @click="e6 = 1"
      >
        Retour
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
        :complete="e6 > 3 && !!lastname"
        step="3"
    >
      Nom
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-text-field
          v-model="lastname"
          :rules="nameRules"
          @input="verifyLastName"
          label="Votre nom de famille"
          required
      ></v-text-field>
      <v-btn
          color="primary"
          @click="e6 = 4"
          :disabled="!this.lastname"
      >
        Continue
      </v-btn>
      <v-btn text
             @click="e6 = 2"
      >
        Retour
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
        :complete="e6 > 4 && phone.length === 10"
        step="4">
      Téléphone
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-otp-input
          v-model="phone"
          dark
          length="10"
          type="number"
          @input="verifyPhone"
      ></v-otp-input>
      <v-btn
          color="primary"
          @click="e6 = 5"
          :disabled="!this.validphone"
      >
        Continue
      </v-btn>
      <v-btn text
             @click="e6 = 3"
      >
        Retour
      </v-btn>
    </v-stepper-content>
    <v-stepper-step
        ::completed="e6 > 5 && verify()"
        step="5"
    >
      Résumé
    </v-stepper-step>
    <v-stepper-content step="5">
      <v-card
          outlined
          shaped
          tile
      >
        <p>Prénom : {{ firstname }}</p>
        <p>Nom de famille : {{ lastname }}</p>
        <p>Email : {{ email }}</p>
        <p>Téléphone : {{ phone }}</p>
      </v-card>
      <v-btn
          color="primary"
          @click="addUser()"
      >
        Valider
      </v-btn>
      <v-btn text
             @click="e6 = 4"
      >
        Retour
      </v-btn>
    </v-stepper-content>
  </v-stepper>

</template>

<script>

import RepositoryFactory from "@/repository/RepositoryFactory";
import { mapState } from "vuex";

const UserRepository = RepositoryFactory.get("users");

export default {
  data() {
    return {
      e6: 1,
      valid: false,
      validfirstname: false,
      validlastname: false,
      validphone: false,
      validemail: false,
      firstname: "",
      lastname: "",
      phone: "",
      nameRules: [
        v => !!v || "Name is required"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  computed: {
    ...mapState(["users"])
  },
  methods: {
    addUser() {
      if (this.verify()) {
        UserRepository.create({
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          phone: this.phone
        }).then((response) => {
          this.users.push(response.data);
        });
      }
    },
    verifyFirstName() {
      this.validfirstname = !!this.firstname;
    },
    verifyLastName() {
      this.validlastname = !!this.lastname;
    },
    verifyEmail() {
      this.validemail = !!this.email && /.+@.+/.test(this.email);
    },
    verifyPhone() {
      this.validphone = this.phone.length === 10;
    },
    verify() {
      return this.validfirstname &&
          this.validlastname &&
          this.validemail &&
          this.validphone;
    }
  }
};
</script>


<style lang="scss">

.v-stepper__label {
  padding-left: 5px;
}

.v-stepper__content {
  margin: 0 5%;
}

.primary:not(disabled) {
  background-color: blue !important;
}

.v-messages__message {
  padding-top: 10px;
}

.v-input__control {
  padding: 10px 0;
}

.v-stepper {
  width: 90%;
}

.v-btn {

}
</style>