import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

const MenuLink = (props: { to: string; children: any, onClick: Function }) => {
  return (
    <NavLink onClick={() => props.onClick()}
      to={props.to}
      className={({ isActive, isPending, isTransitioning }) =>
        `py-1.5 hover:bg-[#3e63dc] hover:text-white px-3 rounded-[0.25rem] text-[0.9rem] ${isActive && 'bg-[#3e63dc] text-white'}`
      }
    >
      <div className='flex gap-2 items-center'>{props.children}</div>
    </NavLink>
  );
};

export default memo(MenuLink);
