import { screen, render } from "@testing-library/react";

import Gig from "../src/components/gig/Gig";
import { bands } from '../src/data/bandsData'

describe("Gig", () => {
  it("Should render a h1 with the correct name", () => {
    render(<Gig band={bands.bearsuit} />);
    expect(screen.getByText("Bearsuit"));
    expect(screen.getByText("Bearsuit are an English art-rock/indie pop band from Norwich, England, active from 2001"));
    expect(screen.getByText("8pm, 20th of September, 2025"));
    expect(screen.getByText("The Water Rats, 328 Grays Inn Road, Kings Cross, WC1X 8BZ"));
  });
});
