//duck typing

interface Course {
    title: string;
    desc: string;
    fee?: number;
    print?: () => void;
    calculateDiscount?: (discount: number) => number;
}

let course: Course = {
    title: 'Angular 2',
    desc: 'by google and a front end tech',
    fee: 200,
    print: () => console.log('course')
};

let angular: Course = {
    title: '',
    desc: '',
    print: () => console.log('course')
};

let courses: Course[] = [
    {
        title: 'Angular 2',
        desc: 'by google and a front end tech',
        fee: 200,
        print: () => console.log('course')
    },
    {
        title: 'Angular 2',
        desc: 'by google and a front end tech',
        fee: 200,
        print: () => console.log('course')
    }
];


interface TrackStats {
    trackId: number;
    totalTracks: number
}

interface CDPlayer {
    play: () => boolean;
    pause: () => boolean;
    stop: () => boolean;
    eject: () => boolean;
    getCurrentTrack?: () => TrackStats
}

class SonyPlayer implements CDPlayer {

    play() {

    }

    pause() {

    }

    stop() {

    }

    eject() {

    }

}

// function types
interface SearchFunc {
    (searchTerm: string): string
}

let bookSearcFunc: SearchFunc;

bookSearcFunc = (term: string): string => {
    //logic goes here
    return '';
};

/*
bookSearcFunc = (term: string, type: boolean): string => {
    //logic here
    return '';
};*/
