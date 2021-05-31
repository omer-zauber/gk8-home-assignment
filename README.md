My goal is to create a desktop application that enables a user to insert a
valid Ethereum address and get a scrollable list of the most recent 10,000
transactions that include this address (in either the sending or the receiving
end).
The app was created in React and Electron, using Creat-React-App,
and includs the following fields in its UI:
• Timestamp
• “From” address
• “To” address
• Value of transaction
• Confirmations
• Hash

The App contains 2 major components, the query field and the table.
The table is created with many small reusable Styled Components, and is being reloaded only when the query string submitted is different than the old one.
Normally i would use the get request outside of the component's logic but in such a small app i wanted to save time.

The API response is limited by 10,000 results by design, so i did not limit it on my end.

the API KEY normally should not be in the git repo, but i wanted to make this repo usable.
