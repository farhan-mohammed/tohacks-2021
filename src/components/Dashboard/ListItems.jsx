import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// fake data generator
// const getItems = (count) =>
//     Array.from({ length: count }, (v, k) => k).map((k) => ({
//         id: `item-${k}`,
//         content: `item ${k}`,
//     }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

// const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',

    // change background colour if dragging
    background: isDragging ? '#888' : 'white',

    // styles we need to apply on draggables
    ...draggableStyle,
});

export default class ListItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }
    componentDidMount() {
        this.setState({ items: this.props.items });
    }

    onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(this.state.items, result.source.index, result.destination.index);
        this.props.setItems(items);
        this.setState({ items });
    };
    RenderItem({ content, type }) {
        switch (type) {
            case 'p':
                return <p>{content}</p>;
            case 'h1':
                return <h1>{content}</h1>;
            case 'h2':
                return <h2>{content}</h2>;
            default:
                return <p>{content}</p>;
        }
    }
    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="list-bg"
                        >
                            {this.state.items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style,
                                            )}
                                            className="list-item"
                                        >
                                            {this.RenderItem(item)}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}

// Put the thing into the DOM!
