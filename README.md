# Eventable

<p align="center">
  <img src="https://i.imgur.com/ia3jsZz.png" />
</p>

## 💡 Inspiration

Make your events feel real with Eventable! Since nearly all the events that we participate in are remote, not by choice but a necessity, Eventable adds helps you add a touch of realism to your event. Wouldn't it be cool if we can easily make these events more personalized and real by shipping out physical real pamphlets and letters? Eventable lets you create and modify a document that you can mail to your attendees all around the world!

## 🔎 What it does

Eventable uses your user database may have a many-to-many relationship with events to send customized letters through our clean and intuitive platform. When you sign in to our platform, you have the option to link your database regardless it be CockroachDB, Datastax Astra, Firebase, and etc. Immediately after, you may start creating a customized PDF letter through our client using an easy-to-use drag and drop workflow. After creating your package for the event, you simply click **send** and we will use LOB API to take care of the package!

## 🔧 How we built it

- **Frontend**: React, Redux, Sass, Semantic UI, react-beautiful-dnd
- **Backend/Cloud**: Firebase, Express, Node.js, PostgreSQL, Cassandra, CockroachDB, Datastax Astra
- **External APIs**: LOB API for mailing and delivery request
- **Design and UI**: Figma, Overlay

## 🛑 Challenges we ran into

- Determining the scope of our library/platform
- Learning Firebase and applying it using Redux
- Merge conflicts with Git version control and lag with peer programming
- Connecting everyone to all the DBaaS we used (CRDB and Datastax)

## ✅ Accomplishments that we're proud of

- Our first "library platform" built within less than 24 hours
- Getting Cassandra to work with many-to-many relationships despite not being made for it
- Managing all the certs from CockroachDB and Datastax Astra in an efficient manner

## 📖 What we learned

- Working on something that you know others might make use of is really exciting and exhilarating
- Learned how to integrate several DBaaS such as CRDB and Datastax Astra
- Learned how to have a better development experience using Figma and Overlay

## 💭 What's next for Eventable

**REACH OUT TO ALL HACKATHON ORGANIZERS!** We want our app/library to help all the organizers out there! Integrating our library should be easy for organizers with their existing platforms. 
