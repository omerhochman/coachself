import MessagesBundle from "./messages_bundle";

export const formatMessage = ({ id, defaultMessage }) =>
  MessagesBundle[id] || defaultMessage;
