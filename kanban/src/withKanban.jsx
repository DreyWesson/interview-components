import React, { useState } from "react";

export const withKanban = (WrappedComponent) => () => {
    const phases = ["Test", "Development", "Production", "Completion"];
    const color = [
        "252, 7, 3,.5",
        "3, 252, 119,0.5",
        "3, 128, 252,0.5",
        "252, 231, 3,0.5",
    ];

    const [formData, setFormData] = useState("");
    const [boardData, setBoardData] = useState(
        phases.reduce((prev, curr) => ({ ...prev, [curr]: [] }), {})
    );
    const dragZone = {
        phaseDest: null,
        indexDest: null,
        initPhase: null,
        initIndex: null,
    };

    const kanban = {
        handleForm(e) {
            setFormData(e.target.value);
        },
        handleAddBtn() {
            if (formData === "") return;

            const copy = { ...boardData };
            copy[phases[0]].push(formData);
            setFormData("");
            setBoardData(() => copy);
        },

        handleMove(e, currentStage, stageIndex, moveType = "next") {
            if (e.type === "contextmenu") moveType = "prev";
            const copy = { ...boardData };
            let val = copy[phases[currentStage]].splice(stageIndex, 1)[0];
            moveType === "next"
                ? currentStage < phases.length - 1 &&
                  copy[phases[currentStage + 1]].unshift(val)
                : currentStage > 0 && copy[phases[currentStage - 1]].push(val);
            setBoardData(() => copy);
        },
        handleDrag() {
            const copy = { ...boardData };
            const { initPhase, initIndex, phaseDest, indexDest } = dragZone;
            let val = copy[phases[initPhase]].splice(initIndex, 1)[0];
            copy[phases[phaseDest]].splice(indexDest, 0, val);
            setBoardData(() => copy);
        },
        handleDragStart(stage, index) {
            dragZone.initPhase = stage;
            dragZone.initIndex = index;
        },
    };

    return (
        <WrappedComponent
            kanban={kanban}
            dragZone={dragZone}
            formData={formData}
            boardData={boardData}
            color={color}
        />
    );
};
