import styled from "styled-components";

const Terms = () => {
  return (
    <>
      <H1>CODE OF CONDUCT</H1>
      <Intro>
        {" "}
        Cosmic Nrg Festival is committed to fostering a safe and inclusive
        community event. In order to do so, Cosmic NRG Festival requires that
        all participants understand and agree to this Code of Conduct in
        relation to all activities regarding the festival.
        <br />
        The following actions will result in a WARNING and/or IMMEDIATE EJECTION
        from the festival:
      </Intro>
      <RulesList>
        <Rules> Offensive or abusive language</Rules>
        <Rules>
          Obscene or offensive gestures, including the use of offensive imagery
          and symbolism on banners, signs, and other visual tools
        </Rules>
        <Rules>
          The participation in an activity that is insulting or harmful to
          oneself and/or fellow guests
        </Rules>
        <Rules>
          Violence or engaging in any harmful behaviour to self or others
        </Rules>
        <Rules> Damage, destruction, vandalism or theft of any property</Rules>
        <Rules>
          Disrespecting or damaging the festival grounds, urination or
        </Rules>
        defecation in the river and/or outside of a proper public restroom
        <Rules> The possession of alcohol</Rules>
        <Rules> The possession, or sale of illegal substances</Rules>
        <Rules> Accessing restricted areas without adequate credentials</Rules>
        <Rules> Creating potential fire risks</Rules>
      </RulesList>
      <Text>
        Any individual who violates this Code of Conduct may be IMMEDIATELY
        removed from the festival grounds and have their Festival Wristband and
        parking/camping privileges revoked, without refund. Law enforcement may
        be notified.
      </Text>
      <Text>
        Please contact us if you believe you have observed or experienced a
        violation of this Code of Conduct, and Cosmic Nrg Festival will work to
        assess the situation and to respond as soon as possible.
      </Text>
      <Text>
        Please remember that notifying Cosmic Nrg Festival does not constitute
        or replace a notification to local law enforcement.{" "}
      </Text>
    </>
  );
};
export default Terms;

const H1 = styled.h1`
  text-align: center;
  max-width: 100vw;
`;
const RulesList = styled.ul`
  padding-left: 10vw;
`;
const Rules = styled.li`
  padding-bottom: 5vh;
`;

const Text = styled.p`
  max-width: 90vw;
  padding: 1vw 5vw;
`;

const Intro = styled.p`
  max-width: 90vw;
  padding: 2vw 5vw;
`;
