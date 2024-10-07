import { Button, DropdownMenu } from '@radix-ui/themes';
import React, { useCallback, useState } from 'react';
import ThemeSelection from '../../ThemeSelection';
import { NavLink } from 'react-router-dom';
import MenuLink from './MenuLink';
import { FaFolderOpen } from 'react-icons/fa';
import { PiStudent } from 'react-icons/pi';

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onMenuClick = useCallback(() => {
    setIsOpen(false);
  }, [])
  
  return (
    <div className='flex items-center justify-between gap-2 p-2 bg-background-color h-[3rem] border-b-[1px]'>
      <NavLink to={'/'} className='text-sm font-bold'>
        Learning Management System
      </NavLink>
      <div className='flex-grow flex gap-2'>
        <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenu.Trigger>
            <Button variant='soft'>
              Programs
              <DropdownMenu.TriggerIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <div id='main-menu-container' className='flex flex-col gap-2 text-sm'>
              <MenuLink to='/program-list' onClick={onMenuClick}>
                <FaFolderOpen /> Program List
              </MenuLink>
              <MenuLink to='/student-list' onClick={onMenuClick}>
                <PiStudent /> Student List
              </MenuLink>
              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
                  <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

                  <DropdownMenu.Separator />
                  <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
      <div className='flex'>
        <ThemeSelection />
      </div>
    </div>
  );
};

export default MainMenu;
