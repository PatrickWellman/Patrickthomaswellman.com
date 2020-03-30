import React from 'react';
import { quotes } from '../../quotes';
import '../CSS/quoteBox.css';

class QuoteBox extends React.Component {
	state = { quote: '' };
	componentDidMount() {
		this.setQuote();
	}
	setQuote = () => {
		const quote = quotes[Math.floor(Math.random() * quotes.length)];
		this.setState({ quote });
	};
	render() {
		const { quote } = this.state;
		return (
			<div className="quoteBox">
				<div className="dailyQuote">{quote.quote}</div>
				<div className="quoteAuthor">{quote.author}</div>
			</div>
		);
	}
}

export default QuoteBox;
