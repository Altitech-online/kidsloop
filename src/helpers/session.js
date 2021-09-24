export const setSession = (sessionItem) => {
  localStorage.removeItem([sessionItem]);
  const now = new Date();

  const item = {
    value: { sessionItem },
    expiry: now.getTime() + 30 * 60000,
  };

  localStorage.setItem("session", JSON.stringify(item));
};

export const getSession = (stateItem, defaultState) => {
  const sessionFile = localStorage.getItem("session");
  if (sessionFile) {
    const sessionData = JSON.parse(sessionFile);
    console.log(sessionData);
    if (new Date().getTime() > sessionData.expiry) {
      localStorage.removeItem("session");
      return defaultState;
    } else {
      return sessionData.value.sessionItem[stateItem];
    }
  }
};
