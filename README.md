# Eventable

<p align="center">
  <img src="https://i.imgur.com/ia3jsZz.png" />
</p>

## 💡 Inspiration

Events are hard to organize, make it easier with Eventable! Now that there are more remote events than ever, we have participants all other the world joining hackathons and events alike. Wouldn't it be cool if we can easily make these events more personalized by shipping out physical pamphlets and letters? Eventable can help you integrate automated, cheap, and easy mailing/delivery all across the world in your event platform.

## 🔎 What it does

Eventable uses your user database may have a many-to-many relationship with events to send customized letters through our clean and intuitive platform. When you sign in to our platform, you have the option to link your database regardless it be CockroachDB, Datastax Astra, MySQL, and etc. Immediately after, you may start creating a customized PDF letter through our client using an easy-to-use drag and drop workflow. After creating your package for the event, you simply click package -> send and we will use LOB API to take care of the package!

## 🔧 How we built it

- **Frontend**: React, Redux, Sass, Semantic UI, react-beautiful-dnd
- **Backend/Cloud**: Firebase, Express, Node.js, PostgreSQL, Cassandra, CockroachDB, Datastax Astra
- **External APIs**: LOB API for mailing and delivery request
- **Design and UI**: Figma, Overlay

## 🛑 Challenges we ran into

- Determining the scope of our library/platform
- Learning Firebase and applying it using Redux
- Merge conflicts with Git version control and lag with peer programming

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
