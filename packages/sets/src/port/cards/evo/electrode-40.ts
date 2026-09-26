import {
  Effect,
  State,
  StoreLike,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class Electrode_40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Voltorb";
  public hp: number = 80;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Buzzap Thunder", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may Knock Out this Pokémon and attach it to one of your Lightning Pokémon as a Special Energy card. This card provides 2 Lightning Energy only while this card is attached to a Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Head Bolt", cost: [], damage: "70", text: "" }
  ];
  public set: string = "EVO";
  public name: string = "Electrode";
  public fullName: string = "Electrode EVO 40";
  public text: string = "Electrode";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
