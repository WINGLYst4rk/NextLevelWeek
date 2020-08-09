module.exports = async function(db, {proffyValue, classValue, classScheduleValues}) {
    //inserir dados na tabela proffy
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            ${proffyValue.name},
            ${proffyValue.avatar},
            ${proffyValue.whatsapp},
            ${proffyvalue.bio}
        );
    `)

    const proffy_id = insertedProffy.lastID

    //inserir dados na tabela classes
    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUE(
                ${classValue.subject},
                ${classValue.cost},
                ${proffy_id}
            );
    `)

    const class_id = insertedClass.lastID

    //inserir dados na tabela classScheduleValues
    const insertedAllClassScheduleValues = classScheduleValues.map((value) => {
        return 
    })
}
