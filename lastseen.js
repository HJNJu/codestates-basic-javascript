function makeLastSeenMsg(name, period) {
    if (period >= (24 * 60)) {
      return `${name}: ${Math.floor(period / (24 * 60))}일 전에 접속함`
    } else if (period >= 60) {
      return `${name}: ${Math.floor(period / 60)}시간 전에 접속함`
    } else {
      return `${name}: ${period}분 전에 접속함`
    }
  }