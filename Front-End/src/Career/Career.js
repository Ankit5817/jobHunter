import React, { useState } from "react";
import "./Career.css";
import advice from "../images/image-5.jpg";
export default function Career() {
  const [skill, setSkill] = useState("");
  console.log(skill);

  const handleTypeChange = (e) => {
    setSkill(e.target.value);
  };

  return (
    <div className="box mt-5">
      <div className="row">
        <div className="col-md-7 col-11">
          <img src={advice} className="advice" alt="" />
        </div>

        <div className="col-md-5 col-11 moto text-center d-flex flex-column justify-content-center">
          <h1> Career Advice </h1>
          <h3>Helping you find your dream job</h3>
        </div>
      </div>

      <div className="row Catgorey text-center">
        <div className="col-12">
          <h3>Please Select Your Preference</h3>
          <select
            name="catogery"
            className="dropdown"
            onChange={handleTypeChange}
          >
            <option value="" selected>
              Select your skill
            </option>
            <option value="UX">UX</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Project Manager">Project Manager</option>
            <option value="IT">IT</option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="Human Resource and Requirement">
              Human Resource and Requirement
            </option>
            <option value="Law">Law</option>
            <option value="Data Science">Data Science</option>
            <option value="Accounting">Accounting</option>
          </select>
        </div>
        <h3> Your Selected Skill is {skill} .</h3>
      </div>

      <div className="row  data">
        <h2>Advice according to your Preference</h2>
        {skill === "Cloud Computing" ? (
          <p>
            Cloud Computing is defined as storing and accessing of data and
            computing services over the internet. It doesn’t store any data on
            your personal computer. It is the on-demand availability of computer
            services like servers, data storage, networking, databases, etc. The
            main purpose of cloud computing is to give access to data centers to
            many users. Users can also access data from a remote server. Types
            of Clouds: a. Private Cloud: Here, computing resources are deployed
            for one particular organization. This method is more used for
            intra-business interactions. Where the computing resources can be
            governed, owned and operated by the same organization. b. Community
            Cloud: Here, computing resources are provided for a community and
            organizations. c. Public Cloud: This type of cloud is used usually
            for B2C (Business to Consumer) type interactions. Here the computing
            resource is owned, governed and operated by government, an academic
            or business organization. d. Hybrid Cloud: This type of cloud can be
            used for both type of interactions – B2B (Business to Business) or
            B2C ( Business to Consumer). This deployment method is called hybrid
            cloud as the computing resources are bound together by different
            clouds. Benefits of cloud computing The potential for cost saving is
            the major reason of cloud services adoption by many organizations.
            Cloud computing gives the freedom to use services as per the
            requirement and pay only for what you use. Due to cloud computing it
            has become possible to run IT operations as a outsourced unit
            without much in-house resources. a. Lower IT infrastructure and
            computer costs for users b. Improved performance c. Fewer
            Maintenance issues d. Instant software updates e. Improved
            compatibility between Operating systems f. Backup and recovery g.
            Performance and Scalability h. Increased storage capacity i.
            Increase data safety
          </p>
        ) : skill === "Data Science" ? (
          <p>
            1. What is Data Science? Data science is the domain of study that
            deals with vast volumes of data using modern tools and techniques to
            find unseen patterns, derive meaningful information, and make
            business decisions. Data science uses complex machine learning
            algorithms to build predictive models.Data science incorporates
            tools from multiple disciplines to gather a data set, process, and
            derive insights from the data set, extract meaningful data from the
            set, and interpret it for decision-making purposes. The disciplinary
            areas that make up the data science field include mining,
            statistics, machine learning, analytics, and programming.Using
            analytics, the data analyst collects and processes the structured
            data from the machine learning stage using algorithms. The analyst
            interprets, converts, and summarizes the data into a cohesive
            language that the decision-making team can understand. Data science
            is applied to practically all contexts and, as the data scientist's
            role evolves, the field will expand to encompass data architecture,
            data engineering, and data administration. 2. What does a data
            scientist do? A data scientist uses data to understand and explain
            the phenomena around them, and help organizations make better
            decisions. Working as a data scientist can be intellectually
            challenging, analytically satisfying, and put you at the forefront
            of new advances in technology. 3. Data Scientist Role and
            Responsibilities a. Ask the right questions to begin the discovery
            process b. Acquire data c. Process and clean the data d. Integrate
            and store data e. Initial data investigation and exploratory data
            analysis f. Choose one or more potential models and algorithms g.
            Apply data science techniques, such as machine learning, statistical
            modeling, and artificial intelligence h. Measure and improve results
            i. Present final result to stakeholders j. Make adjustments based on
            feedback k. Repeat the process to solve a new problem
          </p>
        ) : skill === "Full Stack Developer" ? (
          <p>
            In the world of software programming, it helps to have someone on
            the team who is something of a jack of all trades. They can help
            with various stages of development and have the versatility and time
            management to assist all levels of the development team. When it
            comes to web development, that role belongs to the Full Stack
            Developer. This is not a Back End or Front End developer, but
            someone who handles both — a “Full Stack,” as it were. What Does a
            full stack Developer do? A Full Stack Developer is someone who works
            with the Back End — or server side — of the application as well as
            the Front End, or client side. Full Stack Developers have to have
            some skills in a wide variety of coding niches, from databases to
            graphic design and UI/UX management in order to do their job well.
            They are something of a swing, ready to assist wherever needed in
            the process. Some of the responsibilities of a Full Stack Developer
            include: a. Helping with the design and development of software b.
            Testing and debugging software to keep it optimized c. Writing clean
            code for the front and back end of the software d. Designing user
            interactions on the web application itself e. Creating servers and
            databases for the back end of the software f. Ensuring
            cross-platform compatibility and optimization g. Testing and
            maintaining the responsive design of applications h. Working with
            graphic designers to design new features i. Developing APIs and
            RESTful services j. Keeping up with technological advances to
            optimize their software k. Communicating effectiveness of emerging
            technologies to decision makers l. Considering security,
            maintenance, scalability, and more when developing When Is a Full
            Stack Developer Needed? It depends on the size and scalability of
            the software. For instance, a small independent game group made up
            of only a few people creating a small simulator could have one Back
            End Developer and one Front End Developer and that might be all they
            need for the development. If they’re even smaller, they might have
            one Full Stack Developer who handles the entire application. On the
            other hand, a large web application with strong potential for
            scaling will require many hands on deck — Back End, Front End, and
            Full Stack Developers.
          </p>
        ) : skill === "UX" ? (
          <p>
            A UX Designer is a professional responsible for turning applications
            into something that people enjoy using. They do this by studying the
            user experience and measuring how easy it is to complete tasks in an
            efficient manner while improving ease-of-use capabilities through
            many different approaches.UX designers leverage a wide range of
            technical and workplace skills to bring a successful product or
            service to market (or improve upon an existing product). Many of
            these skills transfer from other fields, so even if you’re new to UX
            design, you’ve likely developed a few already. Focus on these
            essential skills, and you can begin to build a strong foundation for
            a career. UX Designer tasks and responsibilties include: 1.
            Understand the user and the brand. Think about what problem you’re
            trying to solve for the user (and how this aligns with brand goals).
            2. Conduct user research. Identify user needs, goals, behaviors, and
            pain points. Tools for user research might include surveys,
            one-on-one interviews, focus groups, or A/B testing. At some
            companies, a UX researcher leads this process. 3. Analyze what
            you’ve learned. At this stage, you’ll build user personas based on
            your research to help you identify the most important elements of
            the product or service. Start to map out what the user flow will
            look like. 4. Design. As you begin to build out the design, you’ll
            create site maps, wireframes, or prototypes to give you and your
            team a better idea of what the final product will look like. At this
            stage, a user interface (UI) designer will add in visual or
            interface elements. 5. Conduct user testing. Validate the design by
            tracking how real users interact with the product or service
            (usability testing). Identify any problems with the design and
            develop solutions. 6. Present your work. Deliver the design solution
            to your client or company.
          </p>
        ) : skill === "Digital Marketing" ? (
          <p>
            Digital marketing, also known as online marketing, refers to
            advertising delivered through digital channels to promote brands and
            connect potential customers using the internet and other forms of
            digital communication such as: a. Search engines b. Websites c.
            Social media d. Email e. Mobile apps f. Text messaging g. Web-based
            advertising How does digital marketing work? Digital marketing uses
            a range of strategies to reach customers, whether the aim is to
            tempt them into making a purchase, increase their brand awareness,
            or simply engage with your brand. Modern digital marketing comprises
            a broad system of channels, including: a. Social media b. Content
            marketing c. Website marketing d. SEO (search engine optimization)
            e. PPC (pay per click) advertising Why is digital marketing
            important? By implementing an omnichannel digital marketing
            strategy, marketers can collect valuable insights into target
            audience behaviors while opening the door to new methods of customer
            engagement. Additionally, companies can expect an increase in
            retention. According to a report by Invesp, companies with strong
            omnichannel customer engagement strategies retain an average of 89%
            of their customers. Compare that to companies with weak omnichannel
            programs and they have a retention rate of just 33%. Digital
            marketing continues to evolve. For example, the increasing variety
            of wearable devices available to consumers affords new opportunities
            to market to them. Forbes also forecasts that social media will
            become increasingly conversational in the B2B space, video content
            will be refined for search engine optimization (SEO) purposes, and
            email marketing will become even more personalized.
          </p>
        ) : skill === "Project Manager" ? (
          <p>
            They are individuals who understand what projects have in common,
            and their strategic role in how organizations succeed, learn, and
            change. By using project management skills, project managers oversee
            projects that drive success. Project managers are change agents:
            they make project goals their own and use their skills and expertise
            to inspire a sense of shared purpose within the project team. They
            enjoy the organized adrenaline of new challenges and the
            responsibility of driving business results. Additionally, project
            managers work well under pressure and are comfortable with change
            and complexity in dynamic environments. They can shift readily
            between the "big picture" and the small-but-crucial details, knowing
            when to concentrate on each. Project managers cultivate the people
            skills needed to develop trust and communication among all of a
            project's stakeholders: its sponsors, those who will make use of the
            project's results, those who command the resources needed, and the
            project team members. What Does a Project Manager Do? Project
            Managers have a broad and flexible toolkit of techniques, resolving
            complex, interdependent activities into tasks and sub-tasks that are
            documented, monitored, and controlled. They adapt their approach to
            the context and constraints of each project, knowing that no "one
            size" can fit all the variety of projects. And they are always
            improving their own and their teams' skills through lessons-learned
            reviews at project completion. Resoponsibilities of a Project
            Manager include: a. Defining the scope of a project as it relates to
            the overall business objectives and needs b. Planning and monitoring
            each task throughout a project to ensure each item is completed in a
            timely manner. c. Managing the project resources including the
            team’s time and hours d. Communicating effectively on each status of
            the project to corresponding stakeholders e. Foreseeing and
            eliminating possible blockers f. Documenting each step in the
            process using different project management tools available g.
            Ensuring top quality and success of a project
          </p>
        ) : skill === "IT" ? (
          <p>
            The IT sector is said to be the quickest growing and dynamic
            industry in the world. Computers have become an essential part of
            everyone’s life and are used in every sector, such as education,
            communication, business, entertainment, construction, medicine,
            defense, etc. Information technology is being used for developing
            marketing strategies for entrepreneurs and businessmen, accounting
            software for financial institutions, development of a database for
            efficient communication, resource management, customers, etc.,
            development of tools and equipment for agriculture, defense,
            medicine, engineering, etc. The IT professional meaning Information
            Technology; therefore, any person associated with the computer world
            in any form can be said to be an IT professional in layman terms.
            What Does an IT Professional Do? a. Network systems administration
            and support: These IT professionals are responsible for updating
            computer network systems and troubleshooting any issues users may
            have. b. Programming and software development: Programmers and web
            developers write code to create websites, applications, and
            software.
          </p>
        ) : skill === "Law" ? (
          <p>
            1. What is a law? A rule adopted by an organization chiefly for the
            government of its members and the regulation of its affairs. 2. What
            does a lawyer do? A lawyer is licensed to practice law, and is
            obligated to uphold the law while also protecting their client's
            rights. The law is so broad and extensive that it is impossible for
            a single lawyer to successfully provide legal counsel across each
            different area of law. It can be likened to a doctor that focuses on
            a specific area of the body or a specific type of ailment or disease
            — lawyers also specialize in one or two related areas of law. 3.
            What are the needs of a lawyer? a. Providing legal advice and
            counsel b. Researching and gathering information or evidence c.
            Drawing up legal documents related to divorces, wills, contracts,
            and real estate transactions d. Prosecuting or defending in court
          </p>
        ) : skill === "Accounting" ? (
          <p>
            The system of recording and summarizing business and financial
            transactions and analyzing, verifying, and reporting the results An
            accountant is a professional who is responsible for keeping and
            interpreting financial records. Most accountants are responsible for
            a wide range of finance-related tasks, either for individual clients
            or for larger businesses and organizations employing them. Several
            other terms are often discussed in conjunction with the phrase
            “accountant,” which can lead to confusion on what this career
            actually entails. For example, “accountant” and “bookkeeper” are
            phrases that are sometimes used interchangeably, yet there are
            several key differences between these job titles. What does a
            accountant do? Although the daily duties of an accountant will vary
            by position and organization, some of the most common tasks and
            responsibilities of accountants include: a. Ensuring the accuracy of
            financial documents, as well as their compliance with relevant laws
            and regulations b. Preparing and maintaining important financial
            reports c. Preparing tax returns and ensuring that taxes are paid
            properly and on time d. Evaluating financial operations to recommend
            best practices, identify issues and strategize solutions, and help
            organizations run efficiently e. Offering guidance on cost
            reduction, revenue enhancement, and profit maximization f.
            Conducting forecasting and risk analysis assessments What is the
            need of an accountant? Accounting is essential need of business.
            Business can not survive without accounting. Accounting provides the
            information of performance of business. If you have invested your
            capital in beginning of year, what is the value of capital at the
            end of year. Difference is the performance of your capital. You can
            decrease your capital or you can increase your capital. Accounting
            will provide the information of net profit or net loss. So, when we
            will receive this information, we can change our so many past
            decisions. For example, if our capital has decrease by 40% due to
            loss in business. We can search the reason through accounting
            information. For example, product C and D are performing bad. So, we
            will stop to invest our money in such bad performing products. By
            doing this, our cost will decrease, and by stabilizing our other
            products growth, we can gain in next year. Accounting provides not
            only net profit or net loss information but it provides the
            information of financial position. That is the reason, it is very
            needful skill which every businessman should learn. When we see the
            balance sheet which is main part of financial statements of
            accounting, we can know our liabilities and assets. If we invest our
            capital in bad assets, our financial position will down fastly. Good
            businessmen see this position and start to solve the position by
            dispose off bad performing assets. All those who do not keep
            accounting records will never get out from this trap because when
            they suffer losses, they start to get loan at high rate of interest.
            So, losses will increase and interest and loan will increase. One
            day, whole business will destruct due to this. So, all intelligent
            people keep accounting.
          </p>
        ) : (
          <p>
            1. What is an HR department? In simplest terms, the HR (Human
            Resources) department is a group who is responsible for managing the
            employee life cycle (i.e., recruiting, hiring, onboarding, training,
            and firing employees) and administering employee benefits. 2. What
            does a human resource specialist do? Human resources specialists
            recruit, screen, and interview job applicants and place newly hired
            workers in jobs. They also may handle compensation and benefits,
            training, and employee relations. a. Recruit candidates b. Hire the
            right employees c. Process payroll d. Conduct disciplinary actions
            e. Update policies f. Maintain employee records g. Conduct benefit
            analysis 3. What are the needs of Human Resource Some of the reasons
            for need of human resource management are: 1. For Good Industrial
            Relations 2. Create Organisational Commitment 3. Meeting with
            Changing Environment 4. Change in Political Philosophy 5. Enhanced
            Pressure On Employees and 6. Meeting Research and Development
            Requirements. Human resource management tries to create a better
            understanding between management and employees.
          </p>
        )}
      </div>
    </div>
  );
}
