let env = "dev"; // switch prod or dev

const Services = {
  getUserById: async function (id) {
    if (env === "prod") {
      const response = await fetch(`http://localhost:3000/user/${id}`);
      const data = await response.json();
      return data;
    } else {
      const response = await fetch("/data/ApiMocked.json");

      const json = await response.json();

      const data = json.USER_MAIN_DATA.find((user) => user.id === parseInt(id));

      const result = { data: data };

      return result;
    }
  },

  getUserActivityById: async function (id) {
    if (env === "prod") {
      const response = await fetch(`http://localhost:3000/user/${id}/activity`);
      const data = await response.json();
      return data;
    } else {
      const response = await fetch("/data/ApiMocked.json");
      const json = await response.json();
      const data = json.USER_ACTIVITY.find((user) => user.id === parseInt(id));
      const result = { data: data };

      return result;
    }
  },

  getUserAverageSessionById: async function (id) {
    if (env === "prod") {
      const response = await fetch(
        `http://localhost:3000/user/${id}/average-sessions`
      );
      const data = await response.json();
      return data;
    } else {
      const response = await fetch("/data/ApiMocked.json");
      const json = await response.json();
      const data = json.USER_AVERAGE_SESSIONS.find(
        (user) => user.id === parseInt(id)
      );
      const result = { data: data };

      return result;
    }
  },

  getUserPerformanceById: async function (id) {
    if (env === "prod") {
      const response = await fetch(
        `http://localhost:3000/user/${id}/performance`
      );
      const data = await response.json();
      return data;
    } else {
      const response = await fetch("/data/ApiMocked.json");
      const json = await response.json();
      const data = json.USER_PERFORMANCE.find(
        (user) => user.id === parseInt(id)
      );
      const result = { data: data };

      return result;
    }
  },
};

export default Services;
