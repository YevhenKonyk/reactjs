import React from 'react';

/**
 * Рендер по условию
 * Для рендера разметки по условию используются операторы ветвлений и условий. Условия можно проверять перед возвратом
 * разметки, или прямо в JSX.
 */

// if с помощью логического оператора &&
// const Mailbox = ({ unreadMessages }) => (
//   <div>
//     <h1>Hello!</h1>
//     {unreadMessages.length > 0 && (
//       <p>You have {unreadMessages.length} unread messages.</p>
//     )}
//   </div>
// );

// if...else с помощью тернарного оператора
const Mailbox = ({ name, unreadMessages }) => (
  <div>
    <h1>Hello {name}!</h1>
    {unreadMessages.length > 0 ? (
      <p>You have {unreadMessages.length} unread messages</p>
    ) : (
      <p>You don't have an unread messages yet</p>
    )}
  </div>
);

Mailbox.defaultProps = {
  unreadMessages: []
};

// const Mailbox = ({ name, unreadMessages }) => (
//   <div>
//     <h1>Hello {name}.</h1>
//     <p>
//       {unreadMessages.length > 0
//         ? `You have ${unreadMessages.length} unread messages.`
//         : 'No unread messages.'}
//     </p>
//   </div>
// );

export default Mailbox;