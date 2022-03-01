import React from "react";
import PropTypes from "prop-types";

const UserInfoContext = React.createContext(null);

function UserInfoContextProvider({ children }) {
  const [currentUser, setCurrentUser] = React.useState(null);

  const ctxValue = React.useMemo(
    () => ({ currentUser, setCurrentUser }),
    [currentUser, setCurrentUser]
  );

  return (
    <UserInfoContext.Provider value={ctxValue}>
      {children}
    </UserInfoContext.Provider>
  );
}

UserInfoContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useUserInfoContext = () => React.useContext(UserInfoContext);

export const useCurrentUser = () =>
  React.useContext(UserInfoContext)?.currentUser;

export default UserInfoContextProvider;
