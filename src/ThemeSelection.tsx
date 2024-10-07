import { useEffect } from 'react';
import { Select } from '@radix-ui/themes';

enum SelectionTheme {
  Light = 'light',
  Dark = 'dark',
}

const ThemeSelection = () => {
  useEffect(() => {
    const selectedTheme = localStorage.getItem('theme-selection');
    if (selectedTheme) {
      document.body.classList.add(selectedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)')) {
      document.body.classList.add(SelectionTheme.Dark);
    } else {
      document.body.classList.add(SelectionTheme.Light);
    }
  }, []);
  const onThemeChange = (selectedTheme: string) => {
    const currentTheme = localStorage.getItem('theme-selection');
    document.body.classList.remove(currentTheme || '');
    localStorage.setItem('theme-selection', selectedTheme);
    document.body.classList.add(selectedTheme);
    
  };
  return (
    <div>
      <Select.Root onValueChange={onThemeChange} defaultValue={SelectionTheme.Light}>
        <Select.Trigger className="fixed right-2 top-2" />
        <Select.Content>
          {Object.values(SelectionTheme).map((theme, index) => (
            <Select.Item key={index} value={theme}>
              {theme}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
};

export default ThemeSelection;
