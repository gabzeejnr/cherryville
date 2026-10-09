import type { Part } from "../types/terms.types";

const DOC = {
    company: 'Cherryville Limited',
    tagline: 'Empowering Growth Through Learning',
    title: 'Terms and Conditions',
    subtitle: 'Governing the use of the Cherryville website and the supply of all Cherryville services',
    version: 'v1.0',
    footer: 'Terms and Conditions · Cherryville Limited · RC 9150439',
    facts: [
        ['Issued by', 'Cherryville Limited (RC 9150439)'],
        ['Registered office', '6 Taiwo Street, Idi-Oro, Mushin, Lagos, Nigeria'],
        ['Effective date', 'September, 2026'],
        ['Last updated', 'September, 2026'],
        ['Governing law', 'The laws of the Federal Republic of Nigeria'],
    ] as [string, string][],
};

const PART_A: Part = {
    id: 'a',
    label: 'Part A',
    title: 'General',
    sections: [
        {
            n: 1,
            title: 'These terms',
            clauses: [
                { num: '1.1', text: `These Terms and Conditions ("Terms") govern your use of the Cherryville website and the supply by Cherryville Limited of every service it offers. They form a legally binding agreement between you and Cherryville.` },
                { num: '1.2', text: `Cherryville Limited ("Cherryville", "we", "us", "our") is a company incorporated in Nigeria with registration number RC 9150439, whose registered office is at 6 Taiwo Street, Idi-Oro, Mushin, Lagos, Nigeria.` },
                { num: '1.3', text: `By using the website, submitting an enquiry, enrolling on a course, accepting a proposal or engaging Cherryville for any service, you accept these Terms. If you do not accept them, you must not use the website or engage our services.` },
                { num: '1.4', text: `Where you accept these Terms on behalf of an organisation, you confirm that you are authorised to bind that organisation, and "you" refers to that organisation.` },
            ],
        },
        {
            n: 2,
            title: 'How these Terms are organised',
            clauses: [
                { num: '2.1', text: `Part A applies to everyone. Part B applies to Enterprise Training clients. Part C applies to Talent Solutions clients. Part D applies to individual learners enrolling with Cherryville Academy. Part E applies to Private Training. Part F applies to all services.` },
                { num: '2.2', text: `If a term in Parts B to E conflicts with a term in Part A or Part F, the term in Parts B to E prevails for that service only.` },
                { num: '2.3', text: `If a signed proposal, statement of work, engagement letter or training agreement conflicts with these Terms, that signed document prevails to the extent of the conflict.` },
            ],
        },
        {
            n: 3,
            title: 'Definitions',
            definitions: [
                { term: 'Academy', text: `means Cherryville Academy, our programme of courses for individual learners.` },
                { term: 'Client', text: `means an organisation engaging Cherryville for Enterprise Training or Talent Solutions.` },
                { term: 'Cohort', text: `means a group of learners enrolled on the same course with the same start date.` },
                { term: 'Engagement Document', text: `means a proposal, statement of work, engagement letter, purchase order or training agreement accepted by both parties.` },
                { term: 'Learner', text: `means an individual enrolled on an Academy or Private Training course.` },
                { term: 'Materials', text: `means all curricula, manuals, workbooks, slides, datasets, assessment instruments, templates, recordings and other content supplied or made available by Cherryville.` },
                { term: 'NDPA', text: `means the Nigeria Data Protection Act 2023, together with the General Application and Implementation Directive 2025 and any subsequent instrument issued under the Act.` },
                { term: 'Participant', text: `means an individual attending a programme delivered for a Client.` },
                { term: 'Personnel', text: `means an individual sourced, trained or supplied by Cherryville under Part C.` },
                { term: 'Programme', text: `means a training engagement delivered for a Client under Part B.` },
                { term: 'Services', text: `means all services offered by Cherryville, comprising Enterprise Training, Talent Solutions, Academy courses and Private Training.` },
            ],
        },
        {
            n: 4,
            title: 'Use of the website',
            clauses: [
                { num: '4.1', text: `You may use the website for lawful purposes connected with evaluating or engaging our Services.` },
                {
                    num: '4.2',
                    text: `You must not:`,
                    items: [
                        `use the website in any way that breaches applicable law, including the Cybercrimes (Prohibition, Prevention etc.) Act 2015 as amended;`,
                        `attempt to gain unauthorised access to the website, its server or any connected system;`,
                        `introduce any virus, trojan, worm or other malicious code;`,
                        `conduct any automated extraction, scraping or systematic copying of content;`,
                        `submit false, misleading or fraudulent information through any form on the website; or`,
                        `use the website or its content for any commercial purpose that competes with Cherryville.`,
                    ],
                },
                { num: '4.3', text: `We may suspend or withdraw access to the website without notice where we reasonably believe this clause has been breached.` },
            ],
        },
        {
            n: 5,
            title: 'Website availability and content',
            clauses: [
                { num: '5.1', text: `We do not guarantee that the website will be available uninterrupted or error-free. We may suspend, withdraw or restrict all or part of it for business or operational reasons.` },
                { num: '5.2', text: `Content on the website is provided for general information. Course outlines, durations, schedules, fees and service descriptions are indicative and may change. Nothing on the website is an offer capable of acceptance; a binding contract arises only as set out in these Terms.` },
                { num: '5.3', text: `Fees published on the website apply to individual learners only. Corporate, group and in-house pricing is quoted separately and is not derived from published Academy fees.` },
                { num: '5.4', text: `Where the website links to a third-party site, we do not control and are not responsible for that site or its content.` },
            ],
        },
    ],
};


const PART_B: Part = {
    id: 'b',
    label: 'Part B',
    title: 'Enterprise Training',
    sections: [
        {
            n: 6,
            title: 'Application of this Part',
            clauses: [
                { num: '6.1', text: `This Part applies where a Client engages Cherryville for Technical Capacity Development, Custom Curriculum Design, Measurement and Reporting, or Partner and White-Label Delivery.` },
            ],
        },
        {
            n: 7,
            title: 'How an engagement is formed',
            clauses: [
                { num: '7.1', text: `Following a scoping discussion, Cherryville issues a proposal setting out objectives, structure, duration, delivery approach, assessment method, deliverables and price. A proposal is valid for [30] days unless stated otherwise.` },
                { num: '7.2', text: `A binding engagement arises when the Client accepts the proposal in writing, signs a statement of work, or issues a purchase order referencing it, whichever occurs first.` },
                { num: '7.3', text: `Where documents conflict, the order of precedence is: the signed statement of work or engagement letter; the accepted proposal; these Terms; any Client purchase order terms. Client standard purchasing terms printed on or referenced by a purchase order do not apply unless expressly agreed by Cherryville in writing.` },
            ],
        },
        {
            n: 8,
            title: 'What Cherryville will do',
            clauses: [
                { num: '8.1', text: `We will deliver the Programme with reasonable care and skill, in accordance with the Engagement Document and our internal programme lifecycle standard.` },
                { num: '8.2', text: `We will assign facilitators whose certification and experience are appropriate to the subject matter. All facilitators are Microsoft Certified Trainers.` },
                { num: '8.3', text: `We may substitute a facilitator where necessary, provided the replacement holds equivalent certification and experience. A named facilitator is guaranteed only where the Engagement Document expressly says so.` },
                { num: '8.4', text: `We will conduct assessment before, during and after delivery, and provide a closure report analysing capability movement across the matched cohort.` },
            ],
        },
        {
            n: 9,
            title: 'What the Client will do',
            clauses: [
                { num: '9.1', text: `The Client will provide, in reasonable time, the information, access and Participant details necessary for us to scope and deliver the Programme.` },
                { num: '9.2', text: `Where delivery is at the Client’s premises, the Client will provide a suitable training environment including seating, power, lighting, internet access of sufficient bandwidth, and any equipment specified in the Engagement Document.` },
                { num: '9.3', text: `The Client is responsible for selecting Participants who meet the stated entry requirements. Where Participants are materially below the assumed baseline, we will raise this at the definition gate; if the Client elects to proceed, we are not liable for the resulting effect on outcomes.` },
                { num: '9.4', text: `The Client will ensure Participants comply with the site rules, safety requirements and conduct standards applicable at the delivery venue.` },
                { num: '9.5', text: `Where the Client fails to meet an obligation in this clause and delivery is delayed or impaired as a result, we are not in breach, and any additional cost properly incurred may be recharged.` },
            ],
        },
        {
            n: 10,
            title: 'Scheduling, postponement and cancellation',
            clauses: [
                { num: '10.1', text: `Programme dates are confirmed in writing once the Engagement Document is accepted.` },
                {
                    num: '10.2',
                    text: `Where the Client postpones or cancels a confirmed Programme, the following charges apply to the affected sessions, reflecting facilitator commitments and venue liabilities already incurred:`,
                    table: {
                        head: ['Notice given before the affected session', 'Charge'],
                        rows: [
                            ['More than [21] days', 'No charge'],
                            ['[15] to [21] days', '[25]% of the fee for the affected sessions'],
                            ['[8] to [14] days', '[50]% of the fee for the affected sessions'],
                            ['[7] days or less', '[100]% of the fee for the affected sessions'],
                        ],
                    },
                },
                { num: '10.3', text: `Non-recoverable third-party costs already committed — venue deposits, travel and accommodation — are payable in addition to any charge under clause 10.2.` },
                { num: '10.4', text: `Where Cherryville postpones a session, we will offer replacement dates within [30] days at no additional charge. Where we cancel a Programme outright, we will refund all sums paid for undelivered sessions.` },
                { num: '10.5', text: `The Client may substitute a Participant at any time before the second session at no charge, provided the substitute meets the entry requirements. Substitution after that point may compromise assessment validity, and the resulting Participant will be recorded as having joined mid-programme.` },
            ],
        },
        {
            n: 11,
            title: 'Custom curriculum design',
            clauses: [
                { num: '11.1', text: `Where the Client commissions curriculum design, the deliverables are those listed in the Engagement Document.` },
                { num: '11.2', text: `On payment in full, the Client receives a non-exclusive, non-transferable licence to use, reproduce and deliver the commissioned curriculum for its own internal training purposes for as long as the Client continues to comply with these Terms and the Engagement Document. The licence continues after the Programme ends, but Cherryville may terminate it on written notice if the Client is in material and unremedied breach of clause 11.3, clause 27, or clause 32, following the process in clause 39.1.` },
                { num: '11.3', text: `That licence does not permit the Client to sell, sublicense or commercially distribute the curriculum to third parties, or to deliver it as a commercial training service, unless the Engagement Document expressly grants those rights.` },
                { num: '11.4', text: `Cherryville retains ownership of its pre-existing methodologies, frameworks, assessment instruments and templates, and of any generic component not specific to the Client. Nothing in this clause transfers ownership of those materials.` },
            ],
        },
        {
            n: 12,
            title: 'Partner and white-label delivery',
            clauses: [
                { num: '12.1', text: `Where Cherryville delivers under a partner’s brand, we will not identify ourselves to the partner’s client, or name the partner’s client publicly, without written consent.` },
                { num: '12.2', text: `The attribution restrictions agreed in clause 12.1 continue for as long as the white-label engagement is in force and for five [5] years after it ends, survive termination of the wider relationship between Cherryville and the partner for that period. A restriction of indefinite duration is not implied.` },
                { num: '12.3', text: `The partner remains responsible for its own contractual relationship with its client. Cherryville has no direct contractual relationship with the end client unless expressly agreed.` },
            ],
        },
    ],
};


const PART_C: Part = {
    id: 'c',
    label: 'Part C',
    title: 'Talent Solutions',
    sections: [
        {
            n: 13,
            title: 'Application of this Part',
            clauses: [
                { num: '13.1', text: `This Part applies where a Client engages Cherryville for Resource Personnel and Staff Augmentation, Recruit–Train–Deploy, or Project Delivery Teams.` },
            ],
        },
        {
            n: 14,
            title: 'Specification and sourcing',
            clauses: [
                { num: '14.1', text: `The Client will provide a written specification of the role, technical requirements, standard to be met and duration. Cherryville will confirm the specification before sourcing or training begins.` },
                { num: '14.2', text: `Where the engagement includes training to specification, the Client will approve the curriculum and assessment standard in writing before training commences. Approval of the standard is the Client’s acceptance of what "job-ready" means for that engagement.` },
                { num: '14.3', text: `Cherryville assesses every candidate against the agreed specification before presentation. We do not warrant that any individual will perform beyond the specification the Client approved.` },
            ],
        },
        {
            n: 15,
            title: 'Status of Personnel',
            clauses: [
                { num: '15.1', text: `Personnel supplied under this Part are engaged by Cherryville or its subcontractors. They are not employees of the Client, and nothing in the engagement creates a contract of employment between the Client and any individual.` },
                { num: '15.2', text: `Cherryville is responsible for the remuneration of Personnel and for the statutory deductions and contributions applicable to its own engagement of them.` },
                { num: '15.3', text: `The Client will not represent Personnel as its employees, or take any action that would create an employment relationship, without first agreeing a transfer under clause 22.` },
                { num: '15.4', text: `Where the Client directs the day-to-day work of Personnel at its premises, the Client is responsible for their working conditions, health and safety, and for compliance with the Employee’s Compensation Act 2010 and applicable workplace legislation in respect of the working environment it controls.` },
            ],
        },
        {
            n: 16,
            title: 'Client obligations',
            clauses: [
                { num: '16.1', text: `The Client will provide a safe working environment, necessary equipment and system access, adequate supervision, and any site-specific induction.` },
                { num: '16.2', text: `The Client will notify Cherryville promptly of any performance concern, and will allow a reasonable opportunity to remedy it before terminating a placement on performance grounds.` },
                { num: '16.3', text: `The Client will not require Personnel to perform work materially outside the agreed specification without Cherryville’s written agreement and, where appropriate, an adjusted rate.` },
            ],
        },
        {
            n: 17,
            title: 'Replacement',
            clauses: [
                { num: '17.1', text: `Where Personnel are found within [30] days of deployment not to meet the approved specification, Cherryville will replace them at no additional placement charge, provided the Client has met its obligations under clause 16 and has given written notice of the shortfall within that period.` },
                { num: '17.2', text: `The replacement remedy in clause 17.1 is the Client’s sole and exclusive remedy for a failure of Personnel to meet specification.` },
                { num: '17.3', text: `Clause 17.1 does not apply where the placement ends for reasons unconnected with capability, including redundancy, project cancellation, restructuring or a change in the Client’s requirements.` },
            ],
        },
        {
            n: 18,
            title: 'Background verification',
            clauses: [
                { num: '18.1', text: `Cherryville verifies the identity, stated qualifications and employment history of Personnel to the extent reasonably practicable, and confirms the verification performed on request.` },
                { num: '18.2', text: `We rely on information provided by candidates and third parties. We do not warrant its completeness or accuracy beyond the verification actually performed, and we do not conduct criminal record, credit or medical checks unless expressly commissioned and lawfully permitted.` },
                { num: '18.3', text: `Where the Client requires enhanced screening, it must be specified and paid for before deployment.` },
            ],
        },
        {
            n: 19,
            title: 'Direct engagement and transfer fees',
            clauses: [
                { num: '19.1', note: true, text: `This clause protects Cherryville’s investment in sourcing, training and assessing Personnel. It is a central commercial term of every Talent Solutions engagement.` },
                { num: '19.2', text: `During a placement and for [12] months after it ends, the Client will not directly or indirectly engage, employ or contract with any Personnel introduced by Cherryville, whether as employee, contractor, consultant or through a third party, without first paying the transfer fee in clause 19.3.` },
                { num: '19.3', text: `The transfer fee is [20]% of the individual’s gross remuneration for their first twelve months in the new engagement, or [20]% of the annualised value where the engagement is shorter. The fee is payable within [14] days of the individual commencing.` },
                { num: '19.4', text: `Clause 19.2 applies to any Personnel introduced to the Client, whether or not a placement followed the introduction.` },
                { num: '19.5', text: `The Client will notify Cherryville in writing before engaging any individual to whom this clause applies. Failure to notify does not waive the fee.` },
                { num: '19.6', text: `Cherryville will not, during an engagement and for [12] months afterwards, knowingly solicit for employment any employee of the Client with whom it has had material contact through the engagement. This does not restrict responses to general public advertising.` },
                { num: '19.7', text: `If any part of this clause 19 is found unenforceable because its scope, duration or amount exceeds what is reasonable to protect Cherryville's legitimate interest, it will be read down to the narrowest scope, duration or amount that is enforceable, rather than struck out entirely, and the remainder of the clause continues in force.` },
            ],
        },
    ],
};


const PART_D: Part = {
    id: 'd',
    label: 'Part D',
    title: 'Cherryville Academy',
    sections: [
        {
            n: 20,
            title: 'Application of this Part',
            clauses: [
                { num: '20.1', text: `This Part applies to individual learners enrolling on Academy courses. Where you enrol as a consumer, nothing in these Terms removes or limits any right you have under the Federal Competition and Consumer Protection Act 2018 or other applicable consumer protection law.` },
            ],
        },
        {
            n: 21,
            title: 'Enrolment',
            clauses: [
                { num: '21.1', text: `Enrolment is completed by submitting the enrolment form and paying the registration fee. A place is confirmed only when the registration fee is received and we have confirmed enrolment in writing.` },
                { num: '21.2', text: `Places are limited and allocated in order of confirmed enrolment.` },
                {
                    num: '21.3',
                    text: `Where a course states entry requirements, we may require you to complete a placement assessment. If the assessment shows a different level would suit you better, we will tell you so so and recommend an alternative course or level. You may then transfer your enrolment or withdraw with a full refund of all sums paid, including the registration fee. If that assessment indicates that a different level would suit you better, we will tell you so and recommend an alternative course or level. You may then:`,
                    items: [
                        `transfer your enrolment to the recommended course or level at no additional charge; or`,
                        `withdraw and receive a full refund. provided you notify us of your decision within [14] days of receiving our recommendation.`,
                    ],
                },
                { num: '21.4', text: `You must provide accurate enrolment information. We may cancel an enrolment obtained through materially false information, and clause 27 will not apply to that cancellation.` },
            ],
        },
        {
            n: 22,
            title: 'Fees and payment',
            clauses: [
                { num: '22.1', text: `Course fees are those published at the time of enrolment. The registration fee of [₦20,000] secures your place and is deducted from the total course fee.` },
                { num: '22.2', text: `Beginner courses may be paid in two instalments and intermediate and advanced courses in three. The first instalment is due before the first session; the balance must be cleared before the midpoint assessment.` },
                { num: '22.3', text: `Discounts published from time to time are not combinable. Where more than one applies, the larger is used.` },
                { num: '22.4', text: `Where an instalment is more than [14] days overdue, we may suspend access to sessions, materials and assessment until payment is made. We will notify you in writing before suspending access.` },
                { num: '22.5', text: `A certificate will not be issued until the course fee has been paid in full.` },
                { num: '22.6', text: `Fees do not include third-party examination fees, which are paid directly to the examination provider, nor your own equipment or internet access.` },
            ],
        },
        {
            n: 23,
            title: 'Withdrawal, transfer and refunds',
            clauses: [
                {
                    num: '23.1',
                    text: `You may withdraw at any time by written notice to us. Refunds are calculated from the date we receive that notice.`,
                    table: {
                        head: ['When you withdraw', 'Refund of tuition paid'],
                        rows: [
                            ['More than [14] days before the cohort starts', '[100]%, less the registration fee'],
                            ['[14] days or less before the cohort starts', '[85]%, less the registration fee'],
                            ['After the start, up to and including the [second] session', '[50]%, less the registration fee'],
                            ['After the [second] session', 'No refund; one deferral offered instead'],
                        ],
                    },
                },
                { num: '23.2', text: `Refunds are paid to the account from which payment was made, within [21] days of our accepting the withdrawal.` },
                { num: '23.3', text: `You may defer once to the next scheduled cohort of the same course at no charge, provided you request the deferral before the [second] session. A deferred place must be taken within [12] months.` },
                { num: '23.4', text: `Where Cherryville cancels or postpones a cohort, you may take a place on the next cohort or receive a full refund of all sums paid, including the registration fee.` },
                { num: '23.5', text: `Clause 23.1 governs withdrawal by choice. It does not limit your statutory rights. If a course is not delivered with reasonable care and skill, or does not correspond to its published description, you retain your rights under the Federal Competition and Consumer Protection Act 2018, including the right to have the shortfall remedied or to a refund of a reasonable portion of the price. Raise any such concern with us under clause 50 as early as possible so that we can address it.` },
            ],
        },
        {
            n: 24,
            title: 'Attendance, assessment and certification',
            clauses: [
                { num: '24.1', text: `You are expected to attend all sessions. Where attendance falls below [75]% of scheduled sessions, we may decline to issue a certificate, though you may still complete the course.` },
                { num: '24.2', text: `Assessment is conducted at the start, midpoint and end of every course. Completing the entry assessment is a condition of enrolment, as it establishes the baseline against which your progress is measured.` },
                { num: '24.3', text: `A Cherryville certificate of completion is issued where you have attended sufficiently, completed the required assessments and paid the fee in full. It records completion of a Cherryville course; it is not a professional licence, an academic qualification, or a third-party certification.` },
                { num: '24.4', text: `Third-party certifications, including Microsoft certifications, are awarded by the certifying body on its own terms following an examination you sit and pay for directly. We prepare you for those examinations; we do not award those certifications and cannot guarantee a pass.` },
                { num: '24.5', text: `We may withdraw a certificate obtained through plagiarism, impersonation or examination misconduct.` },
            ],
        },
        {
            n: 25,
            title: 'No guarantee of employment',
            clauses: [
                { num: '25.1', note: true, text: `This clause is important and you should read it carefully.` },
                { num: '25.2', text: `Our courses are designed around identified job roles and are intended to make you employable in them. Neither that design intent, nor any outcome figure we publish, nor anything said by our staff or advisors, is a promise, guarantee or representation that you will obtain employment, a particular role, a particular salary, or any work at all on completing a course.` },
                { num: '25.3', text: `Employment outcomes depend on the labour market, on employer decisions, and on your own effort, application and job search, none of which are within our control.` },
                { num: '25.4', text: `Any outcome statistics we publish describe historical results across cohorts. They are not a prediction of your individual result and are not incorporated into this agreement.` },
                { num: '25.5', text: `Where we provide career support, introductions or portfolio review, we do so as an additional service and not as a guarantee of placement.` },
            ],
        },
        {
            n: 26,
            title: 'Learner conduct',
            clauses: [
                { num: '26.1', text: `You will conduct yourself respectfully towards facilitators, staff and other learners, and comply with venue rules and safety requirements.` },
                { num: '26.2', text: `You will not harass, discriminate against, threaten or intimidate any person, disrupt sessions, attend under the influence of alcohol or unlawful substances, or damage equipment or premises.` },
                { num: '26.3', text: `You will not record, photograph or stream a session without our written permission, or share your access credentials for virtual sessions.` },
                { num: '26.4', text: `Where conduct is unacceptable we may issue a warning, suspend attendance, or in serious cases terminate your enrolment. Where enrolment is terminated for serious misconduct, no refund is due.` },
            ],
        },
        {
            n: 27,
            title: 'Course materials',
            clauses: [
                { num: '27.1', text: `Materials are licensed to you personally for your own learning. The licence is non-exclusive, non-transferable and limited to the duration of your course and any access period we specify.` },
                { num: '27.2', text: `You may not copy, share, upload, resell, publish or use Materials to deliver training to others.` },
                { num: '27.3', text: `Session recordings, where provided, are subject to the same restrictions and may be withdrawn after the stated access period.` },
            ],
        },
    ],
};


const PART_E: Part = {
    id: 'e',
    label: 'Part E',
    title: 'Private Training',
    sections: [
        {
            n: 28,
            title: 'Application and formation',
            clauses: [
                { num: '28.1', text: `This Part applies to one-to-one training. Parts D and F also apply to private learners except where this Part says otherwise.` },
                { num: '28.2', text: `Every private engagement begins with a scoping conversation and is governed by a written training agreement setting out scope, session plan, schedule, session count and fees. Training begins only once that agreement is signed and the first payment received.` },
            ],
        },
        {
            n: 29,
            title: 'Sessions',
            clauses: [
                { num: '29.1', text: `Sessions are scheduled by agreement. Either party may reschedule a session by giving at least [24] hours’ notice.` },
                { num: '29.2', text: `Where you cancel with less than [24] hours’ notice, or do not attend within [20] minutes of the scheduled start without notice, the session is treated as delivered and is deducted from your package.` },
                { num: '29.3', text: `Where Cherryville reschedules with less than [24] hours’ notice, a replacement session is provided at no charge.` },
                { num: '29.4', text: `Purchased sessions expire [12] months after the first session unless the training agreement provides otherwise.` },
                { num: '29.5', text: `Sessions delivered at a location outside Lagos mainland may attract a logistics supplement, agreed in writing in advance.` },
                { num: '29.6', text: `Where you withdraw from a private engagement, unused sessions are refundable at the applicable per-session rate, less any discount attributable to the package size and less costs already committed.` },
            ],
        },
    ],
};


const PART_F: Part = {
    id: 'f',
    label: 'Part F',
    title: 'Terms applying to all Services',
    sections: [
        {
            n: 30,
            title: 'Fees, invoicing and taxes',
            clauses: [
                { num: '30.1', text: `Fees are stated in Nigerian Naira and are exclusive of Value Added Tax, which will be charged at the prevailing rate where applicable.` },
                { num: '30.2', text: `Client invoices are payable within [30] days of the invoice date unless the Engagement Document states otherwise.` },
                { num: '30.3', text: `Where a Client is required by law to deduct withholding tax, it may do so and will remit the deduction to the relevant tax authority and provide Cherryville with the withholding tax credit note within [30] days. No other deduction, set-off or retention may be made.` },
                { num: '30.4', text: `Overdue sums bear interest at [2]% per month or part month from the due date until payment, calculated on a daily basis.` },
                { num: '30.5', text: `Where an engagement extends beyond [12] months, fees may be reviewed on [60] days’ written notice.` },
                { num: '30.6', text: `Reasonable travel, accommodation and venue costs are recharged at cost where the Engagement Document provides for them.` },
            ],
        },
        {
            n: 31,
            title: 'Intellectual property',
            clauses: [
                { num: '31.1', text: `All intellectual property in the website, the Cherryville name and logo, the Materials, our methodologies, our programme lifecycle standard and our assessment instruments belongs to Cherryville or its licensors, and is protected under the Copyright Act 2022 and other applicable law.` },
                { num: '31.2', text: `Nothing in these Terms transfers ownership of that intellectual property. You receive only the licences expressly granted.` },
                { num: '31.3', text: `Where Materials incorporate third-party content licensed to Cherryville, your use is additionally subject to that third party’s terms.` },
                { num: '31.4', text: `Where a Client supplies its own data, systems or content for use in a Programme, that Client retains ownership of it. The Client grants Cherryville a licence to use it for the purpose and duration of the engagement only.` },
                { num: '31.5', text: `We may describe the general nature of work performed for the purposes of our own marketing, but we will refer to a Client by name,  use aggregated or anonymised outcome data, and display a Client logo for reference purposes unless the Client notifies us in writing that it withholds consent, in which case we will stop that specific use within a reasonable time.` },
            ],
        },
        {
            n: 32,
            title: 'Confidentiality',
            clauses: [
                { num: '32.1', text: `Each party will keep confidential all non-public information disclosed by the other in connection with an engagement, use it only for the purposes of that engagement, and disclose it only to those of its personnel and advisers who need it and who are bound by equivalent obligations.` },
                { num: '32.2', text: `These obligations do not apply to information that is or becomes public other than through breach, was already lawfully held, is independently developed, or is required to be disclosed by law, regulation or a competent authority. Where disclosure is compelled, the disclosing party will notify the other in advance where lawfully able to do so.` },
                { num: '32.3', text: `Confidentiality obligations survive termination for [5] years, and indefinitely for trade secrets, personal data and attribution restrictions under clause 12.` },
            ],
        },
        {
            n: 33,
            title: 'Data protection',
            clauses: [
                { num: '33.1', text: `Cherryville processes personal data in accordance with the Nigeria Data Protection Act 2023 and the General Application and Implementation Directive 2025. Our Privacy Policy explains what we collect, why, and on what lawful basis, and forms part of these Terms.` },
                { num: '33.2', text: `Where we process personal data for our own purposes — including enquiries, enrolments, assessment records and marketing where consented to — we act as a data controller.` },
                { num: '33.3', text: `Where we process Participant data on a Client’s instructions in the course of a Programme, we act as a data processor and the Client acts as controller. In that case the parties will enter into a data processing agreement identifying the parties, purpose, scope, categories of data and lawful basis, as required under the NDPA.` },
                { num: '33.4', text: `Each party will implement appropriate technical and organisational measures to protect personal data, and will notify the other without undue delay on becoming aware of a personal data breach affecting data processed under the engagement, so that regulatory notification obligations can be met. Cherryville may engage sub-processors provided it imposes equivalent data protection obligations on them and remains responsible for their performance without undue delay and, in any event, within 72 hours of becoming aware of it."` },
                { num: '33.5', text: `Data subjects may exercise their rights under the NDPA, including access, rectification, erasure, restriction, objection and portability, by contacting us at [privacy email]. Where you believe your privacy rights have been infringed you may raise the matter with us, and may escalate to the Nigeria Data Protection Commission or seek civil redress.` },
                { num: '33.6', text: `We retain personal data only as long as necessary for the purposes for which it was collected and to meet legal, tax and regulatory obligations.` },
                { num: '33.7', text: `Where personal data is transferred outside Nigeria, we will ensure an adequate legal basis for that transfer under the NDPA.` },
            ],
        },
        {
            n: 34,
            title: 'Photography and recording',
            clauses: [
                { num: '34.1', text: `We may photograph or record sessions for quality assurance, and for marketing where separate written consent has been given.` },
                { num: '34.2', text: `No image or recording in which an individual is identifiable will be published without that individual’s written consent, which may be withdrawn at any time.` },
                { num: '34.3', text: `You may decline to be photographed or recorded without any effect on your participation.` },
            ],
        },
        {
            n: 35,
            title: 'Warranties and disclaimers',
            clauses: [
                { num: '35.1', text: `We warrant that we will perform the Services with reasonable care and skill, using appropriately qualified personnel.` },
                { num: '35.2', text: `Except as expressly stated, and to the fullest extent permitted by law, all other warranties, conditions and terms implied by statute or common law are excluded.` },
                { num: '35.3', text: `We do not warrant any particular business outcome, examination result, employment outcome or return on investment. Clause 25 applies to learners.` },
                { num: '35.4', text: `Nothing in these Terms excludes or limits any liability or right that cannot lawfully be excluded or limited, including under the Federal Competition and Consumer Protection Act 2018.` },
            ],
        },
        {
            n: 36,
            title: 'Limitation of liability',
            clauses: [
                { num: '36.1', text: `Nothing in this clause limits liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for any other liability that cannot lawfully be limited.` },
                { num: '36.2', text: `Subject to clause 36.1, neither party is liable to the other for loss of profit, loss of revenue, loss of anticipated savings, loss of business or opportunity, loss of goodwill, or any indirect or consequential loss, however arising.` },
                { num: '36.3', text: `Subject to clause 36.1, our total aggregate liability arising out of or in connection with an engagement, whether in contract, tort, breach of statutory duty or otherwise, is limited to the total fees paid by you to Cherryville under that engagement in the [12] months preceding the event giving rise to the claim.` },
                {
                    num: '36.4',
                    text: `We are not liable for loss or damage to personal property brought to a delivery venue. The cap in clause 36.3 does not apply to:`,
                    items: [
                        `Cherryville's indemnity at clause 37.2, which is instead subject to its own cap of [150]% of the fees paid;`,
                        `a party's obligations of confidentiality or the transfer fee under clause 19, which remain unlimited; or`,
                        `a Client's obligation to pay fees properly due.`,
                    ],
                },
                { num: '36.5', text: `A claim must be notified in writing within [12] months of the claimant becoming aware of the circumstances giving rise to it.` },
            ],
        },
        {
            n: 37,
            title: 'Indemnity',
            clauses: [
                { num: '37.1', text: `The Client will indemnify Cherryville against claims, losses and reasonable costs arising from the Client’s breach of clause 31.4, from content or data the Client supplies, and from conditions at a Client-controlled venue that the Client was responsible for under clause 9.2 or clause 16.1.` },
                { num: '37.2', text: `This indemnity is subject to the cap in clause 36.4(a), does not extend to any infringement arising from the Client's modification of the Materials or their combination with something not supplied by Cherryville, and is Cherryville's sole liability, and the Client's sole remedy, for such a claim.` },
            ],
        },
        {
            n: 38,
            title: 'Force majeure',
            clauses: [
                { num: '38.1', text: `Neither party is liable for failure or delay caused by an event beyond its reasonable control, including natural disaster, a significant cyberattack on the affected party's systems, epidemic, war, civil unrest, terrorism, industrial action, government action, sustained failure of power or telecommunications infrastructure, or the closure of a venue by order of a competent authority.` },
                { num: '38.2', text: `The affected party will notify the other promptly and take reasonable steps to mitigate, including offering virtual delivery or rescheduled dates where feasible.` },
                { num: '38.3', text: `Where the event continues for more than [60] days, either party may terminate the affected engagement, and Cherryville will refund sums paid for undelivered Services.` },
            ],
        },
        {
            n: 39,
            title: 'Suspension and termination',
            clauses: [
                { num: '39.1', text: `Either party may terminate an engagement immediately by written notice where the other commits a material breach that is not remedied within [14] days of written notice, or becomes insolvent, enters liquidation or has a receiver appointed.` },
                { num: '39.2', text: `We may suspend Services where fees are overdue by more than [30] days, having first given written notice.` },
                { num: '39.3', text: `On termination, the Client will pay for all Services delivered up to the termination date and for non-recoverable costs properly committed.` },
                { num: '39.4', text: `Clauses concerning fees accrued, intellectual property, confidentiality, data protection, transfer fees, limitation of liability, indemnity, dispute resolution and governing law survive termination.` },
            ],
        },
        {
            n: 40,
            title: 'Anti-bribery and lawful conduct',
            clauses: [
                { num: '40.1', text: `Each party will comply with applicable anti-bribery, anti-corruption, anti-money laundering and sanctions law, including the Corrupt Practices and Other Related Offences Act 2000 and the Money Laundering (Prevention and Prohibition) Act 2022.` },
                { num: '40.2', text: `Neither party will offer or accept any improper payment or advantage in connection with an engagement. Breach of this clause is a material breach that is incapable of remedy.` },
            ],
        },
        {
            n: 41,
            title: 'Complaints',
            clauses: [
                { num: '41.1', text: `If you are dissatisfied, contact us at [complaints email] with the detail of your concern. We will acknowledge within [2] business days and respond substantively within [10] business days.` },
                { num: '41.2', text: `We would prefer to resolve a concern directly. Nothing in this clause prevents you from referring a matter to the Federal Competition and Consumer Protection Commission, the Nigeria Data Protection Commission, or a court of competent jurisdiction.` },
            ],
        },
        {
            n: 42,
            title: 'Dispute resolution',
            clauses: [
                { num: '42.1', text: `The parties will first attempt to resolve any dispute by good faith negotiation between senior representatives within [30] days of written notice of the dispute. This clause does not apply to a claim for a liquidated or undisputed sum, including unpaid fees, instalments or the transfer fee under clause 19, which either party may pursue directly through the courts.` },
                { num: '42.2', text: `Where negotiation fails, the parties will attempt mediation in Lagos under the Arbitration and Mediation Act 2023 before commencing arbitration.` },
                { num: '42.3', text: `Where mediation fails, the dispute will be referred to and finally resolved by arbitration under the Arbitration and Mediation Act 2023. The seat is Lagos, Nigeria; the language is English; and the tribunal is one arbitrator agreed between the parties or, failing agreement within [21] days, appointed by the [Lagos Court of Arbitration].` },
                { num: '42.4', text: `This clause does not prevent either party from seeking urgent injunctive or interim relief from a court, and does not restrict a consumer’s right to bring a claim before a court of competent jurisdiction or to complain to a regulator.` },
            ],
        },
        {
            n: 43,
            title: 'General',
            clauses: [
                { num: '43.1', text: `Notices must be in writing and sent to the addresses in the Engagement Document or, for learners, to the email addresses exchanged at enrolment. Notice by email is effective on delivery during business hours.` },
                { num: '43.2', text: `You may not assign or transfer your rights without our written consent. We may assign to a successor of our business on written notice.` },
                { num: '43.3', text: `We may subcontract delivery, including to contracted facilitators, and remain responsible for the performance of our subcontractors.` },
                { num: '43.4', text: `Nothing in these Terms creates a partnership, joint venture, agency or employment relationship between the parties.` },
                { num: '43.5', text: `These Terms together with the applicable Engagement Document and Privacy Policy are the entire agreement between the parties and supersede all prior discussions. Neither party relies on any statement not set out in them, save that nothing excludes liability for fraudulent misrepresentation.` },
                { num: '43.6', text: `If any provision is held invalid or unenforceable, it is severed and the remainder continues in force.` },
                { num: '43.7', text: `Failure or delay in enforcing a right is not a waiver of it.` },
                { num: '43.8', text: `A person who is not a party has no right to enforce these Terms.` },
                { num: '43.9', text: `We may amend these Terms from time to time. The version in force is the version published on the website at the date of your enrolment or the date of your Engagement Document, and later amendments do not apply retrospectively to a live engagement without your agreement.` },
            ],
        },
        {
            n: 44,
            title: 'Governing law and jurisdiction',
            clauses: [
                { num: '44.1', text: `These Terms and any dispute arising out of them are governed by the laws of the Federal Republic of Nigeria.` },
                { num: '44.2', text: `Subject to clause 42, the courts of Lagos State and the Federal High Court sitting in Lagos have jurisdiction.` },
            ],
        },
        {
            n: 45,
            title: 'Contact',
            contact: {
                company: 'Cherryville Limited · RC 9150439',
                address: '6 Taiwo Street, Idi-Oro, Mushin, Lagos, Nigeria',
                rows: [
                    { label: 'General enquiries', values: [{ text: 'info@cherryvillelimited.africa', href: 'mailto:info@cherryvillelimited.africa' }] },
                    { label: 'Telephone', values: [{ text: '07048288168', href: 'tel:07048288168' }, { text: '08064265176', href: 'tel:08064265176' }] },
                    { label: 'Complaints', values: [{ text: 'info@cherryvillelimited.africa', href: 'mailto:info@cherryvillelimited.africa' }] },
                    { label: 'Data protection enquiries', values: [{ text: 'info@cherryvillelimited.africa', href: 'mailto:info@cherryvillelimited.africa' }] },
                ],
            },
        },
    ],
};

const PARTS: Part[] = [PART_A, PART_B, PART_C, PART_D, PART_E, PART_F];

export { DOC, PARTS }