const DATA = {
    projects: {
        "vfl-wehbach": {
            occupation: "Owner @ Old West Site Usability",
            year: 2018,
            name: "&ldquo;VfL Wehbach&rdquo; sports club",
            role: "Designer & Consultant"
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

    DATA.byOccupation[p.occupation].push(p.name);
}

export { DATA };
export default DATA;
