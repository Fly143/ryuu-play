import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamAquaSSharpedo_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Aqua's Carvanha";
  public hp: number = 90;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Aqua Search", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may search your deck for a Team Aqua Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sharp Fang", cost: [], damage: "70", text: "" }
  ];
  public set: string = "DCR";
  public name: string = "Team Aqua's Sharpedo";
  public fullName: string = "Team Aqua's Sharpedo DCR 21";
  public text: string = "Team Aqua's Sharpedo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
