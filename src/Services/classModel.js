// Modeling class

class UserMainData {
  constructor(data) {
    this.id = data.id;
    this.firstName = data.userInfos.firstName;
    this.todayScore = data.todayScore || data.score;
    this.calorie = data.keyData.calorieCount;
    this.proteine = data.keyData.proteinCount;
    this.glucide = data.keyData.carbohydrateCount;
    this.lipide = data.keyData.lipidCount;
  }
}

class ActivityData {
  constructor(data) {
    this.id = data.id;
    this.sessions = data.sessions;
  }
}

class AverageSessionData {
  constructor(data) {
    this.id = data.id;
    this.sessions = data.sessions;
  }
}

class PerformanceData {
  constructor(data) {
    const categories = {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    };

    for (const categoriesPerf in data.data) {
      data.data[categoriesPerf].kind = categories[parseInt(categoriesPerf) + 1];
    }

    // method reverse for display RadarChart categories in correct order
    this.data = Object.values(data.data).reverse();
  }
}

export { UserMainData, ActivityData, AverageSessionData, PerformanceData };
