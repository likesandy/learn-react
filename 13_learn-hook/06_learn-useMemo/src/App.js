import React, { useState, memo, useMemo } from "react";

/**
 * useMemo用于优化代码,可以让对应的函数只有依赖发生改变的时候才返回新的值
 * useMemo可以看做是useCallback底层的实现 
 * useCallback和useMemo的区别
 * 	useCallback返回的永远是一个函数
 * 	useMemo返回的是return返回的内容
 * 应用场景: 对耗时耗性能操作进行优化
 */

function calculate() {
	console.log('calculate函数被执行了');
	let total = 0;
	for (let i = 0; i < 999; i++) {
		total += i
	}
	return total
}

const Home = memo((props) => {
	console.log("Home组件渲染成功");

	return (
		<div>
			<h2>Home</h2>
			<button onClick={() => { props.increment() }}>+1</button>
		</div>
	);
});


const About = memo((props) => {
	console.log("About组件渲染成功");

	return (
		<div>
			<h2>About</h2>
			<button onClick={() => { props.decrement() }}>-1</button>
		</div>
	);
});

export default memo(function App() {
	console.log("App组件渲染成功");

	const [countState, setCountState] = useState(0);

	function increment() {
		setCountState(countState + 1);
	}

	const decrement = useMemo(() => {
		return () => {
			setCountState(countState - 1)
		}
	}, [countState])

	// const total = calculate()
	const total = useMemo(() => {
		return calculate()
	}, [])

	return (
		<div>
			<h2>App</h2>
			<h2>当前计数:{countState}</h2>
			<button onClick={() => { increment() }} >  +1 </button>
			<button onClick={() => { decrement() }}>-1</button>
			<hr />
			<Home increment={increment} />
			<hr />
			<About decrement={decrement} />
			<hr />
			<h2>应用场景</h2>
			<h2>{total}</h2>
		</div >
	);
})

