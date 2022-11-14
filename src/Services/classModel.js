// Modeling class

class userMainData {
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

class activityData {
  constructor(data) {
    this.id = data.id;
    this.sessions = data.sessions;
  }
}

class averageSessionData {
  constructor(data) {
    this.id = data.id;
    this.sessions = data.sessions;
  }
}

class performanceData {
  constructor(data) {
    this.id = data.id;
    this.kind = data.kind;
    this.data = data.data;
  }
}

export { userMainData, activityData, averageSessionData, performanceData };
