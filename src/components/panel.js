const OPTIONS = {
  position: {
    h: [
      { id: 'h-pos-l', label: 'Left', prop: 'justifyContent', value: 'flex-start' },
      { id: 'h-pos-c', label: 'Center', prop: 'justifyContent', value: 'center' },
      { id: 'h-pos-r', label: 'Right', prop: 'justifyContent', value: 'flex-end' }
    ],
    v: [
      { id: 'h-pos-t', label: 'Top', prop: 'alignItems', value: 'flex-start' },
      { id: 'h-pos-c', label: 'Center', prop: 'alignItems', value: 'center' },
      { id: 'h-pos-b', label: 'Bottom', prop: 'alignItems', value: 'flex-end' }
    ]
  },
};

const PanelSection = ({ title, children }) => {
  return (
    <section className="category">
        <h3>{ title }</h3>
        <div className="controls">
        { children }
        </div>
      </section>
  );
};

const Control = ({ label, children }) => {
  return (
    <div className="control">
      <label>{ label }:</label>
      <div className="row">
        { children }
      </div>
    </div>
  );
};

const Panel = ({ boxStyle, containerStyle, onBoxStyleChange, onContainerStyleChange }) => {
  return (
    <div className="panel">
      <PanelSection title="Position">
        <div className="controls">
          <Control label="Horizontal">
            { OPTIONS.position.h.map(item => (
              <button key={item.id} id={item.id} className={`icon-btn ${containerStyle[item.prop] === item.value ? 'active' : ''}`}
                onClick={() => onContainerStyleChange({ [item.prop]: item.value })}>{ item.label }</button>
            )) }
          </Control>
          <Control label="Vertical">
            { OPTIONS.position.v.map(item => (
              <button key={item.id} id={item.id} className={`icon-btn ${containerStyle[item.prop] === item.value ? 'active' : ''}`}
                onClick={() => onContainerStyleChange({ [item.prop]: item.value })}>{ item.label }</button>
            )) }
          </Control>
        </div>
      </PanelSection>

      <PanelSection title="Size">
        <div className="controls">

        </div>
      </PanelSection>

      <PanelSection title="Spacing">
        <div className="controls">

        </div>
      </PanelSection>

      <PanelSection title="Border">
        <div className="controls">

        </div>
      </PanelSection>

      <PanelSection title="Background">
        <div className="controls">

        </div>
      </PanelSection>

      <PanelSection title="Shadow">
        <div className="controls">

        </div>
      </PanelSection>
    </div>
  );
};

export default Panel;
