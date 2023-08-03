import './moose.css';
export default function moose(){
    return (
        <div className="Moose">
            <h1>Sarah's Favourite Animal</h1>
    <table>
        <tr>
            <th>Home</th>
            <th>Fun Facts</th>
        </tr>
        <tr>
        <td><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTkhmMCi2JpOiZe2HjD6cGug5Rx54Gptqi-7ayDHrWOeBkC3jUI" alt=" " height="200"></img></td>
        <td><p>Her name is Sarah, and her favourite animal is the moose.<br></br>They can be up to 6.5 feet tall 
        and weigh 1200 pounds.<br></br>Surprisingly, they're good at swimming!<br></br>If you want to learn more about the moose, 
        check out <a href="https://en.wikipedia.org/wiki/Moose">its <br></br>Wikipedia page.</a></p></td></tr>
    </table>
    <h2>Moose are awesome because...</h2>
    <ol type="1">
        <li>They can swim really well</li>
        <li>They can make really funny noises</li>
        <li>They can close their nostrils</li>
    </ol>
    <h2>If I were a moose,I would...</h2>
    <ul>
        <li>Eat lots of lettuce</li>
        <li>Carry little aimals on my antlers</li>
        <li>swim to Alaska</li>
    </ul>
    <h2>Moose Video</h2>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/9MUCQwW2W7k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    );
}