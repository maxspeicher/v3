const DATA = {
    projects: {
        "vfl-wehbach": {
            occupation: "Owner &bull; Old West Site Usability",
            year: 2018,
            name: "VfL-Wehbach.de",
            roles: ["Design", "Consulting"],
            process: {
                step1: {
                    title: "Step 1",
                    description: "Ducimus quasi eos quo vel tenetur. Quia et sequi velit sunt autem facilis. Doloribus non corporis modi sunt exercitationem sint. Aliquid sit quo illo qui et fugit. Delectus cum itaque eos. Autem aut natus nihil eos."
                },
                step2: {
                    title: "Step 2",
                    description: "Ducimus quasi eos quo vel tenetur. Quia et sequi velit sunt autem facilis. Doloribus non corporis modi sunt exercitationem sint. Aliquid sit quo illo qui et fugit. Delectus cum itaque eos. Autem aut natus nihil eos."
                },
                step3: {
                    title: "Step 3",
                    description: "Ducimus quasi eos quo vel tenetur. Quia et sequi velit sunt autem facilis. Doloribus non corporis modi sunt exercitationem sint. Aliquid sit quo illo qui et fugit. Delectus cum itaque eos. Autem aut natus nihil eos."
                }
            }
        },
        "gesturewiz": {
            occupation: "Research Fellow &bull; University of Michigan",
            year: 2017,
            name: "GestureWiz",
            roles: ["Project Lead", "Design", "Code"]
        },
        "xd-ar": {
            occupation: "Research Fellow &bull; University of Michigan",
            year: 2017,
            name: "XD-AR",
            roles: ["Project Lead", "Design"]
        },
        "floorplan": {
            occupation: "VP of Data Analytics &bull; bitstars GmbH",
            year: 2016,
            name: "Floor Plan Feature for HoloBuilder.com",
            roles: ["Feature Ownership", "Interaction Design"]
        },
        "sio": {
            occupation: "Industrial Ph.D. Student &bull; Unister GmbH",
            year: 2016,
            name: "Search Interaction Optimization",
            roles: ["Project Lead", "Design", "Code"]
        },
        "sos": {
            occupation: "Industrial Ph.D. Student &bull; Unister GmbH",
            year: 2015,
            name: "SERP Optimization Suite",
            roles: ["Project Lead", "Design", "Code"]
        },
        "w3touch": {
            occupation: "Master's Student &bull; ETH Zürich",
            year: 2012,
            name: "W3Touch",
            roles: ["Design", "Code"]
        },
        "crowdadapt": {
            occupation: "Research Assistant &bull; ETH Zürich",
            year: 2011,
            name: "CrowdAdapt",
            roles: ["Design", "Code"]
        }
    },
    byOccupation: {},
    byYear: {}
};

for (let id in DATA.projects) {
    const p = DATA.projects[id];

    if (!DATA.byOccupation[p.occupation]) {
        DATA.byOccupation[p.occupation] = [];
    }

    DATA.byOccupation[p.occupation].push({
        id: id,
        name: p.name
    });

    if (!DATA.byYear[p.year]) {
        DATA.byYear[p.year] = [];
    }

    DATA.byYear[p.year].push({
        id: id,
        name: p.name
    });
}

export { DATA };
export default DATA;
