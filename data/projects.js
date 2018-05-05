const DATA = {
    projects: [
        {
            id: "vfl-wehbach",
            occupation: "Owner",
            place: "Old West Site Usability",
            year: 2018,
            name: "VfL-Wehbach.de",
            roles: ["Design", "Consulting"],
            process: [
                {
                    id: "step1",
                    title: "Step 1",
                    description: "Ducimus quasi eos quo vel tenetur. Quia et sequi velit sunt autem facilis. Doloribus non corporis modi sunt exercitationem sint. Aliquid sit quo illo qui et fugit. Delectus cum itaque eos. Autem aut natus nihil eos."
                },
                {
                    id: "step2",
                    title: "Step 2",
                    description: "Ducimus quasi eos quo vel tenetur. Quia et sequi velit sunt autem facilis. Doloribus non corporis modi sunt exercitationem sint. Aliquid sit quo illo qui et fugit. Delectus cum itaque eos. Autem aut natus nihil eos."
                },
                {
                    id: "step3",
                    title: "Step 3",
                    description: "Ducimus quasi eos quo vel tenetur. Quia et sequi velit sunt autem facilis. Doloribus non corporis modi sunt exercitationem sint. Aliquid sit quo illo qui et fugit. Delectus cum itaque eos. Autem aut natus nihil eos."
                }
            ]
        },
        {
            id: "gesturewiz",
            occupation: "Research Fellow",
            place: "University of Michigan",
            year: 2017,
            name: "GestureWiz",
            roles: ["Project Lead", "Design", "Code"]
        },
        {
            id: "xd-ar",
            occupation: "Research Fellow",
            place: "University of Michigan",
            year: 2017,
            name: "XD-AR",
            roles: ["Project Lead", "Design"]
        },
        {
            id: "floorplan",
            occupation: "VP of Data Analytics",
            place: "bitstars GmbH",
            year: 2016,
            name: "Floor Plan Feature for HoloBuilder.com",
            roles: ["Feature Ownership", "Interaction Design"]
        },
        {
            id: "sio",
            occupation: "Industrial Ph.D. Student",
            place: "Unister GmbH",
            year: 2016,
            name: "Search Interaction Optimization",
            roles: ["Project Lead", "Design", "Code"]
        },
        {
            id: "sos",
            occupation: "Industrial Ph.D. Student",
            place: "Unister GmbH",
            year: 2015,
            name: "SERP Optimization Suite",
            roles: ["Project Lead", "Design", "Code"]
        },
        {
            id: "w3touch",
            occupation: "Master's Student",
            place: "ETH Zürich",
            year: 2012,
            name: "W3Touch",
            roles: ["Design", "Code"]
        },
        {
            id: "crowdadapt",
            occupation: "Research Assistant",
            place: "ETH Zürich",
            year: 2011,
            name: "CrowdAdapt",
            roles: ["Design", "Code"]
        }
    ],
    byOccupation: {},
    byOccupationKeys: [],
    byYear: {},
    byYearKeys: []
};

const SEPARATOR = "@";

for (let i=0; i<DATA.projects.length; ++i) {
    const p = DATA.projects[i];
    const occupation = p.occupation + ` ${SEPARATOR} ` + p.place;

    if (!DATA.byOccupation[occupation]) {
        DATA.byOccupation[occupation] = [];
        DATA.byOccupationKeys.push(occupation);
    }

    DATA.byOccupation[occupation].push({
        id: p.id,
        name: p.name
    });

    if (!DATA.byYear[p.year]) {
        DATA.byYear[p.year] = [];
        DATA.byYearKeys.push(p.year);
    }

    DATA.byYear[p.year].push({
        id: p.id,
        name: p.name
    });
}

export { DATA };
export default DATA;
