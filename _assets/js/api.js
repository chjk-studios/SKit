async function fetchData() {
    console.log("Trying to fetch Skript data...")
    try {
        const response = await fetch(SkriptsDBEndpoint + '/rows', {
            method: 'GET',
            headers: {
                'X-Appwrite-Project': projectID,
                'Content-Type': 'application/json',
            },
        });
    

        if (!response.ok) {
            throw new Error(`   Status ${response.status}`)
        }

        console.log('Fetch Successful!')
        const result = await response.json();
        return result

    } catch (error) {
        console.error('  Error requesting Skript data: ', error.message);
    }
}

function parseData(data) {
    return data.rows.map(row => ({
        name: row.Name,
        short_desc: row.Short_Desc,
        desc: row.Desc,
        id: row.$id,
        created: row.$createdAt,
        tags: row.Tags,
        downloads: row.Download_Count,
        public: row.Public,
        version: row.Version,
        dlink: row.Download,
        author: row.Author
    }));
}

async function getSkriptData() {
    const data = await fetchData();
    if (!data) return [];
    const cardData = parseData(data);
    return cardData;
}
