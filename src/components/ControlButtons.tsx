import React from 'react';
import { Status } from '../types/stateType';
import { StartButton, StopButton, WaitButton, ResetButton } from './buttons';

interface ControlButtonsProps {
  status: Status;
}

const ControlButtons: React.FC<ControlButtonsProps> = ({ status }) => (
  <div className="buttons">
    {status !== Status.START ? <StartButton /> : <StopButton />}
    <WaitButton
      isDisabled={status === Status.STOP}
      isActive={status === Status.WAIT}
    />
    <ResetButton isDisabled={status === Status.STOP} />
  </div>
);

export default React.memo(ControlButtons);
