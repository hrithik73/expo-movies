import { styled } from 'nativewind';
import React from 'react';
import { Pressable, PressableProps, Text, TextProps } from 'react-native';

interface ButtonProps extends PressableProps {
  textStyle?: TextProps['style'];
  children: React.ReactNode;
  onPress: () => void;
}

const Button = ({ children, onPress, textStyle, ...props }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      {...props}
      className='h-10 w-40 bg-stone-900 justify-center items-center rounded-md dark:bg-stone-100'
    >
      <Text style={textStyle} className='text-white dark:text-black'>
        {children}
      </Text>
    </Pressable>
  );
};

export default styled(Button, {
  props: {
    textStyle: true,
  },
});
