export class Client {
  firstName: string;
  lastName: string;
  avatar: string;
  company: string;
  jobTitle: string;
  email: string;
  phone: string;
  city: string;
  street: string;
  zipCode: string;
  country: string;

  fromJSON(json: any) {
    try {
      this.firstName = json.general.firstName;
      this.lastName = json.general.lastName;
      this.avatar = json.general.avatar;
      this.company = json.job.company;
      this.jobTitle = json.job.title;
      this.email = json.contact.email;
      this.phone = json.contact.phone;
      this.city = json.address.city;
      this.street = json.address.street;
      this.zipCode = json.address.zipCode;
      this.country = json.address.country;
    } catch (err) {
      console.log(`Failed to create Client from JSON: ${err.message}.t`);
    }
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  searchThroughFields(text: string): boolean {
    let fields = [];
    for (let key in this) {
      let field = this[key];

      console.log(key);
      if (this.hasOwnProperty(key) && typeof field !== 'function') {
        fields.push(field.toString());
      }
    }

    return fields.join('').toLowerCase().includes(text.toLowerCase());
  }
}
