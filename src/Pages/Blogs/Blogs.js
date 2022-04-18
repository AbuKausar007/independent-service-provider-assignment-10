import React from "react";

const Blogs = () => {
  return (
    <div className="container shadow-lg p-5 my-5 mx-auto">
      <article className="text-start mb-5">
        <h2>Question: Difference between authentication and authorization.</h2>

        <p style={{ fontSize: "20px" }}>
          <b>
            <u>Answer:</u>
            <br />
          </b>{" "}
          Authentication confirms that users are who they say they are.
          Authorization gives those users permission to access a resource.
        </p>
        <p style={{ fontSize: "20px" }}>
          In authentication process, the identity of users are checked for
          providing the access to the system. In this process, users or persons
          are verified. It is done before the authorization process. It needs
          usually user’s login details. Authentication determines whether the
          person is user or not.
        </p>
        <p style={{ fontSize: "20px" }}>
          While in authorization process, person’s or user’s authorities are
          checked for accessing the resources. In this process, users or persons
          are validated. This process is done after the authentication process.
          It needs user’s privilege or security levels. It determines What
          permission do user have?
        </p>
      </article>
      <article className="text-start mb-5">
        <h2>
          Question: Why are you using firebase? What other options do you have
          to implement authentication?
        </h2>
        <p style={{ fontSize: "20px" }}>
          <b>
            <u>Answer:</u>
            <br />
          </b>{" "}
          Firebase, Backend-as-a-Service (BaaS), is a platform by Google that
          provides functionalities and helps with the backend development of
          Android, iOS, or web and even some products. But at present, as a web
          develop learner I am using firebase mainly for my website
          authentication. Besides that, I'm also using the deploy service from
          google firebase.
        </p>
        <p style={{ fontSize: "20px" }}>
          There are so many options to implement authentication. I'm mentioning
          some popular authentication system that developers are using all over
          the world.
        </p>
        <p style={{ fontSize: "20px" }}>
          1. Auth0 is the go-to user authentication platform and a Firebase
          alternative for good reasons.
        </p>
        <p style={{ fontSize: "20px" }}>
          2. Okta is a flagbearer of password-less security. However, you can
          ask for the strongest passwords with Okta as well.
        </p>
        <p style={{ fontSize: "20px" }}>
          3. STYTCH is a staunch supporter of password-less authentication. It
          is focused on improving user experience and cutting developer
          headaches by doing just that.
        </p>
        <p style={{ fontSize: "20px" }}>
          4. Ory brings complete user experience control with its headless user
          authentication management.{" "}
        </p>
        <p style={{ fontSize: "20px" }}>
          5. Keycloak is an open-source user identity and access management
          platform.
        </p>
        <p style={{ fontSize: "20px" }}>
          6. PingIdentity is shaped as an intelligent central authentication
          module for all your cloud, in-house, and SaaS implementations.
        </p>
      </article>
      <article className="text-start">
        <h2>
          Question: What other services does firebase provide other than
          authentication?
        </h2>
        <p style={{ fontSize: "20px" }}>
          <b>
            <u>Answer:</u>
            <br />
          </b>{" "}
          Firebase is one of the effective platforms that have made the task of
          the app developers simpler to much extent.Some key featues of google
          firebase are Cloud Messaging, Authentication, Hosting, Remote
          Configuration, Test Lab, Crash Reporting, Realtime Database, Storage.
          Followings are short description about others services:
        </p>
        <p style={{ fontSize: "20px" }}>
          1. Real-time Database, it helps to Store and Synchronize Data
        </p>
        <p style={{ fontSize: "20px" }}>
          2. Firebase has Become Smarter with Google Analytics
        </p>
        <p style={{ fontSize: "20px" }}>
          3. Firebase Offers Facility of Crash Reporting to Fix Bugs Quickly
        </p>
        <p style={{ fontSize: "20px" }}>4. Fast and Secured Web Hosting</p>
        <p style={{ fontSize: "20px" }}>
          5. Firebase Allows the Content Storage with Ease
        </p>
        <p style={{ fontSize: "20px" }}>
          6. Developers have the Accessibility of Machine Learning
        </p>
        <p style={{ fontSize: "20px" }}>
          7. Send Notifications and Messages to Targeted Audiences
        </p>
        <p style={{ fontSize: "20px" }}>
          8. Send the App Recommendation through Dynamic Links
        </p>
        <p style={{ fontSize: "20px" }}>
          9. Generate More Traffic to your App with App Indexing
        </p>
        <p style={{ fontSize: "20px" }}>
          10. The Facility of In-App Advertising
        </p>
      </article>
    </div>
  );
};

export default Blogs;
