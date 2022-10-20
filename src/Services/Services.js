const Services = {
  getUserById: async function (id) {
    const response = await fetch(`http://localhost:3000/user/${id}`);
    const data = await response.json();
    return data;
  },

  getUserActivityById: async function (id) {
    const response = await fetch(`http://localhost:3000/user/${id}/activity`);
    const data = await response.json();
    return data;
  },

  getUserAverageSessionById: async function (id) {
    const response = await fetch(
      `http://localhost:3000/user/${id}/average-sessions`
    );
    const data = await response.json();
    return data;
  },

  getUserPerformanceById: async function (id) {
    const response = await fetch(
      `http://localhost:3000/user/${id}/performance`
    );
    const data = await response.json();
    return data;
  },
};

export default Services;
