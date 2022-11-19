import {
  ActivityData,
  AverageSessionData,
  PerformanceData,
  UserMainData,
} from "./classModel";
let env = "prod"; // switch "prod" (API) || "dev" (ApiMocked)

/**
 * Services for call API || APIMocked
 * @param {number} - user id
 * @returns {object} - data
 */

const Services = {
  getUserById: async function (id) {
    if (env === "prod") {
      const response = await fetch(`http://localhost:3000/user/${id}`);
      const data = await response.json();
      const result = new UserMainData(data.data);
      return result;
    } else {
      const response = await fetch("/data/ApiMocked.json");

      const json = await response.json();

      const data = json.USER_MAIN_DATA.find((user) => user.id === parseInt(id));

      const result = new UserMainData(data);
      return result;
    }
  },

  getUserActivityById: async function (id) {
    if (env === "prod") {
      const response = await fetch(`http://localhost:3000/user/${id}/activity`);
      const data = await response.json();
      const result = new ActivityData(data.data);
      return result;
    } else {
      const response = await fetch("/data/ApiMocked.json");
      const json = await response.json();
      const data = json.USER_ACTIVITY.find((user) => user.id === parseInt(id));
      const result = new ActivityData(data);

      return result;
    }
  },

  getUserAverageSessionById: async function (id) {
    if (env === "prod") {
      const response = await fetch(
        `http://localhost:3000/user/${id}/average-sessions`
      );
      const data = await response.json();
      const result = new AverageSessionData(data.data);
      return result;
    } else {
      const response = await fetch("/data/ApiMocked.json");
      const json = await response.json();
      const data = json.USER_AVERAGE_SESSIONS.find(
        (user) => user.id === parseInt(id)
      );
      const result = new AverageSessionData(data);

      return result;
    }
  },
  getUserPerformanceById: async function (id) {
    if (env === "prod") {
      const response = await fetch(
        `http://localhost:3000/user/${id}/performance`
      );
      const data = await response.json();
      const result = new PerformanceData(data.data);
      return result;
    } else {
      const response = await fetch("/data/ApiMocked.json");
      const json = await response.json();
      const data = json.USER_PERFORMANCE.find(
        (user) => user.id === parseInt(id)
      );
      const result = new PerformanceData(data);

      return result;
    }
  },
};

export default Services;
