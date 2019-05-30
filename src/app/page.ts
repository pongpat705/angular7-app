
    export interface Content {
        filmId: number;
        title: string;
        description: string;
        releaseYear: number;
        languageId: number;
        originalLanguageId?: any;
        rentalDuration: number;
        rentalRate: number;
        length: number;
        replacementCost: number;
        rating: string;
        specialFeatures: string;
        lastUpdate: Date;
    }

    export interface Sort {
        sorted: boolean;
        unsorted: boolean;
        empty: boolean;
    }

    export interface Pageable {
        sort: Sort;
        offset: number;
        pageNumber: number;
        pageSize: number;
        paged: boolean;
        unpaged: boolean;
    }

    export interface Sort2 {
        sorted: boolean;
        unsorted: boolean;
        empty: boolean;
    }

    export interface Page {
        content: Content[];
        pageable: Pageable;
        totalPages: number;
        totalElements: number;
        last: boolean;
        size: number;
        number: number;
        sort: Sort2;
        numberOfElements: number;
        first: boolean;
        empty: boolean;
    }
